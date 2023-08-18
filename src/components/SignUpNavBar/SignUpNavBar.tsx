import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import "./SignUpNavBar.scss";

import React from "react";
import Button from "../Button/Button";

const SignUpNavBar = () => {
  return (
    <>
      <div className="sign-up-nav">
        <div className="logo">
          <Logo />
        </div>
        <Button>LogIn</Button>
      </div>
    </>
  );
};

export default SignUpNavBar;
