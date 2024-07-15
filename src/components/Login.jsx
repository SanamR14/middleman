import React from 'react';
import logo from '../asserts/logo.png';
import { Typography,Button,Link, Grid, Card, CardContent,TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, CardActions} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons'
import "../App.css"
const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  return (
   
    <>
     <Link href="/">
    <img src={logo} alt="Middle Man" height="50px" />
    </Link>
    <Typography variant='h3' style={{textAlign:'center'}}>Log In</Typography>
    <Grid container justifyContent='center' style={{marginTop:"2%"}}>
        <Card>
            <CardContent>
                <div style={{display:'grid'}}>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </div>
            </CardContent>
            <CardActions style={{display:'grid'}}>
            <Button variant="contained" disableElevation>Log In</Button>
             <Typography variant='body2'>Forgot Password?</Typography>
             <Typography variant='body2'> Do not have a account ? <Link href='/signUp'>Click here to register</Link> </Typography>
            </CardActions>
        </Card>
    </Grid>
    </>

    
  )
}

export default Login