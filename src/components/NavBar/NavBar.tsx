import React from "react";
import { FC } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as VerticalLine } from "../../assets/images/verticalLine.svg";
import { ReactComponent as ChevronDown } from "../../assets/images/chevronDown.svg";
import Button from "../Button/Button";
import "./navBar.scss";

const NavBar: FC = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar__logo">
          <Logo />
        </div>
        <div className="nav-bar__seperator">
          <VerticalLine />
        </div>
        <div className="nav-bar__links">
          <p>Home</p>
          <p>Talent</p>
          <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <span>Employer</span>
            <span>
              <ChevronDown style={{ color: "blueviolet" }} />
            </span>
          </p>
          <p>Patner</p>
          <p>Blog</p>
          <p>Events</p>
        </div>
        <div className="account-links">
          <Button>Login</Button>
          <Button type="INVERTED">Sign Up</Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;