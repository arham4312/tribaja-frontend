import React, { FC } from "react";
import Button from "../Button/Button";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import "./Footer.scss";
const Footer: FC = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-flex">
          <div className="footer__text">
            <Logo />
            <p>We would love to hear from you.</p>
            <p>
              Feel free to reach our if you want to collaborate with us, or
              simply have a chat
            </p>
            <Button>Contact Us</Button>
            <p>Don’t like the forms? Drop us a line via email.</p>
            <a href="mailto:hello@tribaja.com">hello@tribaja.com</a>
          </div>
          <div className="footer__links">
            <div className="links-columns">
              <ul className="links-column">
                <li>Company</li>
                <li>about</li>
                <li>job-seekers</li>
                <li>Employer</li>
                <li>partner</li>
              </ul>
              <ul className="links-column">
                <li>Company</li>
                <li>about</li>
                <li>job-seekers</li>
                <li>Employer</li>
                <li>partner</li>
              </ul>
              <ul className="links-column">
                <li>Company</li>
                <li>about</li>
                <li>job-seekers</li>
                <li>Employer</li>
                <li>partner</li>
              </ul>
            </div>
            <a href="#" className="back-to-top">
              Back To The Top
            </a>
          </div>
        </div>
        <div style={{ height: "1px", background: "#999" }} />
        <div className="copyright-and-privacy">
          <p>© Tribaja 2023. All rights reserved</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
