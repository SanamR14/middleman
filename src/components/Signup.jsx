import React, { useState } from "react";
import logo from "../asserts/logo.png";
import {
  Typography,
  Link,
  Button,
  Grid,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  CardActions,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import "../App.css";
import axios from "axios";

const Signup = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [values, setValues] = useState({
    u_name: "",
    u_email: "",
    u_password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    axios
      .post("http://localhost:8081/register", values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Link href="/">
        <img src={logo} alt="Middle Man" height="50px" />
      </Link>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Register
      </Typography>
      <Grid container justifyContent="center" style={{ marginTop: "2%" }}>
        <form onSubmit={handleOnSubmit}>
          <Card>
            <CardContent>
              <div style={{ display: "grid" }}>
                <FormControl
                  size="small"
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="my-input-name">Name</InputLabel>
                  <OutlinedInput
                    id="name"
                    label="Name"
                    variant="outlined"
                    name="u_name"
                    onChange={handleInput}
                  />
                </FormControl>

                <FormControl
                  size="small"
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="my-input-email">Email</InputLabel>
                  <OutlinedInput
                    id="email"
                    label="Email"
                    variant="outlined"
                    name="u_email"
                    onChange={handleInput}
                  />
                </FormControl>

                <FormControl
                  size="small"
                  sx={{ m: 1, width: "25ch" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    name="u_password"
                    onChange={handleInput}
                  />
                </FormControl>
              </div>
            </CardContent>
            <CardActions style={{ display: "grid" }}>
              <Button type="submit" variant="contained" disableElevation>
                Register
              </Button>
            </CardActions>
          </Card>
        </form>
      </Grid>
    </>
  );
};

export default Signup;
