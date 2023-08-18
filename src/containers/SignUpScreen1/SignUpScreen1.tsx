import React from "react";
import Button from "../../components/Button/Button";
import SignUpNavBar from "../../components/SignUpNavBar/SignUpNavBar";
import "./SignUpScreen1.scss";
import signUp1 from "../../assets/images/signUp1.png";
import SignUpFooter from "../../components/SignUpFooter/SignUpFooter";
import { LoginWithGoogleButton } from "../../components/Button/Button";
import { LoginWithLinkedInButton } from "../../components/Button/Button";

import OrSeperator from "../../components/OrSeperator/OrSeperator";

const SignUpScreen1 = () => {
  return (
    <>
      <SignUpNavBar />
      <div className="sign-up-screen-1">
        <div>
          <h1>Join the tribe</h1>
          <p className="sign-up-screen-1__subheading">
            Open Doors to Limitless Tech Networking and Learning Opportunities
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "24px" }}
          >
            <LoginWithGoogleButton />
            <LoginWithLinkedInButton />
          </div>

          <OrSeperator />

          <p className="email-label">Email</p>
          <input type="email" className="email-input" />
          <Button
            backgoundColor="var(--brand-colors-color, #5937CC)"
            style={{ border: "0px", width: "100%", justifyContent: "center", paddingBlock: "16px" }}
          >
            Continue with email
          </Button>
          <p className="privacy-policy">
            By signing up, you agree to our <span>Terms of Use</span> and{" "}
            <span>Privacy Policy</span>
          </p>
        </div>
        <div
          className="img-wrapper"
          style={{
            backgroundImage: `linear-gradient(1deg, rgba(0, 0, 0, 0.89) 0%, rgba(0, 0, 0, 0.00) 100%), url(${signUp1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
          }}
        >
          <h2>Accelerate your career growth.</h2>
          <p>Join members from over 141+ countries to learn from curated mentors in tech.</p>
        </div>
      </div>
      <SignUpFooter />
    </>
  );
};

export default SignUpScreen1;
