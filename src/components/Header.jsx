import React from "react";
import { AppBar, Toolbar, Divider, Button } from "@material-ui/core";
import logo from "../asserts/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      style={{ display: "flex" }}
    >
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <img src={logo} alt="Middle Man" height="50px" />
        </div>
        <Button
          variant="contained"
          disableElevation
          style={{ marginRight: "1rem", borderRadius: "8px" }}
          onClick={() => navigate("login")}
        >
          Log In
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          variant="text"
          style={{ marginLeft: "1rem" }}
          onClick={() => navigate("seller-login")}
        >
          {" "}
          Want to sell?{" "}
        </Button>
      </Toolbar>
      <Divider orientation="horizontal" />
    </AppBar>
  );
};

export default Header;
