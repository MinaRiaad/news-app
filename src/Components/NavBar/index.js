import React, { useState } from "react";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [hidden, setHidden] = useState(true);

  const handleDropdown = () => {
    setHidden((prev) => !prev);
  };

  return (
    <>
      <div className="nav-container">
        <div className="left-container">
          <img src="/images/link-logo.jpg" alt="logo" />
        </div>
        <div className="center-container">
          <p>Home</p>
          <p>About us</p>
          <p>News</p>
          <p>Contact us</p>
        </div>
        <div className="right-container">
          <p>Login</p>
          <Button className="sign-up-button">Sign up</Button>
          <p>EN</p>
        </div>
        <div className="icon-container">
          <Button color="inherit" onClick={handleDropdown}>
            <MenuIcon />
          </Button>
        </div>
      </div>
      {!hidden && (
        <div className="dropdown">
          <div className="inner">
            <p>Home</p>
            <p>About us</p>
            <p>News</p>
            <p>Contact us</p>
            <p>Login</p>
            <Button className="sign-up-button">Sign up</Button>
            <p>EN</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
