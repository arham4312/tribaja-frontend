import React from "react";
import SignUpNavBar from "../../components/SignUpNavBar/SignUpNavBar";
import Button, {
  LoginWithGoogleButton,
  LoginWithLinkedInButton,
} from "../../components/Button/Button";
import OrSeperator from "../../components/OrSeperator/OrSeperator";
import SignUpFooter from "../../components/SignUpFooter/SignUpFooter";
import signUp1 from "../../assets/images/signUp1.png";
import "./SignUpScreen2.scss";

type SignUpScreen2Props = {};

const SignUpScreen2 = ({}: SignUpScreen2Props) => (
  <>
    <SignUpNavBar />
    <div className="sign-up-screen-2">
      <div>
        <h1>Welcome to Tribaja</h1>
        <p className="sign-up-screen-2__subheading">
          Open Doors to Limitless Tech Networking and Learning Opportunities
        </p>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "24px" }}
        >
          <LoginWithGoogleButton />
          <LoginWithLinkedInButton />
        </div>

        <OrSeperator />
        <label>
          <p className="input-label">Email</p>
          <input type="email" className="input-text" />
        </label>
        <label>
          <p className="input-label">I want to continue as</p>
          <select className="input-text">
            <option value="talent">Talent</option>
            <option value="employer">Employer</option>
            <option value="patner">Partner</option>
            <option value="scout">Scout</option>
          </select>
        </label>
        <label>
          <p className="input-label">Create a password</p>
          <input type="password" className="input-text" />
        </label>
        <label>
          <p className="input-label">Repeat Password</p>
          <input type="password" className="input-text" />
        </label>
        <Button
          backgoundColor="var(--brand-colors-color, #5937CC)"
          style={{ border: "0px", width: "100%", justifyContent: "center", paddingBlock: "16px" }}
        >
          Continue with email
        </Button>
        <p className="privacy-policy">
          By signing up, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span>
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

export default SignUpScreen2;
