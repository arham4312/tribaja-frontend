import React from "react";
import { FC, MouseEventHandler, useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as VerticalLine } from "../../assets/images/verticalLine.svg";
import { ReactComponent as ChevronDown } from "../../assets/images/chevronDown.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./navBar.scss";

import { BsChevronDown } from "react-icons/bs";

const NavBar: FC = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const [svgRotate, setSvgRotate] = useState<boolean | null>(null);
  const [random, setRandom] = useState(7);

  const handleMouseEnter: MouseEventHandler<HTMLParagraphElement> = () => {
    setIsSubMenuOpen(true);
    setSvgRotate(true);
  };

  const handleMouseLeave: MouseEventHandler<HTMLParagraphElement> = () => {
    setIsSubMenuOpen(false);
    setSvgRotate(false);
  };
  return (
    <>
      <div className="nav-bar">
        <Link to="/">
          <div className="nav-bar__logo">
            <Logo />
          </div>
        </Link>
        <div className="nav-bar__seperator">
          <VerticalLine />
        </div>
        <div className="nav-bar__links">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/talent">
            <p>Talent</p>
          </Link>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              position: "relative",
              height: "40px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/employer">
              <p
                style={
                  isSubMenuOpen
                    ? { color: "var(--dark, #1e1e2f)", fontWeight: 500 }
                    : {}
                }
              >
                Employer
              </p>
            </Link>
            {isSubMenuOpen && <EmployeeDropDown />}

            <span
              className={`svg-wrapper ${
                svgRotate == true ? "rotate-svg" : ""
              } ${svgRotate == false ? "rotate-svg2" : ""}`}
            >
              <BsChevronDown
                style={{
                  strokeWidth: isSubMenuOpen ? "1px" : "",
                  position: "relative",
                  top: "1px",
                }}
              />
            </span>
          </p>
          <Link to="/partner">
            <p>Partner</p>
          </Link>
          <Link to="#">
            <p>Blog</p>
          </Link>
          <Link to="#">
            <p>Events</p>
          </Link>
        </div>
        <div className="account-links">
          <Button>Login</Button>
          <Button type="INVERTED">
            <Link to="/sign-up">Sign up</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;

const EmployeeDropDown = (props: any) => {
  return (
    <>
      <div className="employee-drop-down">
        <div>Tribaja </div>
        <ul className="drop-down-options">
          <Link to="/employer/hire-from-us">
            <li>
              <BagSvg />
              <div>
                <p>Hire From Us</p>
                <p>A place for employers to find diverse tech talent.</p>
              </div>
            </li>
          </Link>
          <Link to="/employer/post-job">
            <li>
              <PlusSvg />
              <div>
                <p>Post a Job</p>
                <p>Post and open role to share with our talent network.</p>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

const BagSvg = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.091 6.98002C20.241 6.04002 18.821 5.57002 16.761 5.57002H16.521V5.53002C16.521 3.85002 16.521 1.77002 12.761 1.77002H11.241C7.48101 1.77002 7.48101 3.86002 7.48101 5.53002V5.58002H7.24101C5.17101 5.58002 3.76101 6.05002 2.91101 6.99002C1.92101 8.09002 1.95101 9.57002 2.05101 10.58L2.06101 10.65L2.13801 11.463C2.15301 11.613 2.23301 11.748 2.35901 11.83C2.59901 11.987 3.00001 12.246 3.24101 12.38C3.38101 12.47 3.53101 12.55 3.68101 12.63C5.39101 13.57 7.27101 14.2 9.18101 14.51C9.27101 15.45 9.68101 16.55 11.871 16.55C14.061 16.55 14.491 15.46 14.561 14.49C16.601 14.16 18.571 13.45 20.351 12.41C20.411 12.38 20.451 12.35 20.501 12.32C20.898 12.095 21.309 11.819 21.684 11.548C21.7398 11.5076 21.7866 11.4559 21.8212 11.3963C21.8558 11.3367 21.8776 11.2705 21.885 11.202L21.901 11.059L21.951 10.589C21.961 10.529 21.961 10.479 21.971 10.409C22.051 9.39902 22.031 8.02002 21.091 6.98002ZM13.091 13.83C13.091 14.89 13.091 15.05 11.861 15.05C10.631 15.05 10.631 14.86 10.631 13.84V12.58H13.091V13.83ZM8.91101 5.57002V5.53002C8.91101 3.83002 8.91101 3.20002 11.241 3.20002H12.761C15.091 3.20002 15.091 3.84002 15.091 5.53002V5.58002H8.91101V5.57002Z"
          fill="#5937CC"
        />
        <path
          d="M20.8728 13.735C20.9537 13.6965 21.0432 13.68 21.1324 13.6872C21.2217 13.6944 21.3074 13.725 21.3811 13.7759C21.4547 13.8268 21.5136 13.8962 21.5519 13.9772C21.5901 14.0581 21.6063 14.1477 21.5988 14.237L21.2388 18.191C21.0288 20.191 20.2088 22.231 15.8088 22.231H8.18982C3.78982 22.231 2.96982 20.191 2.75982 18.201L2.41982 14.453C2.41226 14.3646 2.42793 14.2759 2.46529 14.1955C2.50265 14.1151 2.56039 14.0459 2.63279 13.9947C2.70518 13.9436 2.7897 13.9122 2.87794 13.9039C2.96619 13.8955 3.0551 13.9103 3.13582 13.947C4.27582 14.463 6.37782 15.377 7.67682 15.717C7.7579 15.739 7.83311 15.7786 7.89707 15.8331C7.96104 15.8875 8.01217 15.9554 8.04682 16.032C8.65382 17.33 9.96982 18.021 11.8708 18.021C13.7528 18.021 15.0858 17.303 15.6948 16.002C15.7295 15.9255 15.7807 15.8576 15.8446 15.8031C15.9086 15.7487 15.9838 15.709 16.0648 15.687C17.4438 15.324 19.6828 14.302 20.8748 13.735H20.8728Z"
          fill="#5937CC"
        />
      </svg>
    </>
  );
};

const PlusSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
        fill="#5937CC"
      />
    </svg>
  );
};
