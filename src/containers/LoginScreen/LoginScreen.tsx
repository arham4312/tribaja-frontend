import React, { FC } from "react";
import Button from "../../components/Button/Button";
import SignUpNavBar from "../../components/SignUpNavBar/SignUpNavBar";
// import "./SignUpScreen1.scss";
import signUp1 from "../../assets/images/signUp1.png";
import SignUpFooter from "../../components/SignUpFooter/SignUpFooter";
import { LoginWithGoogleButton } from "../../components/Button/Button";
import { LoginWithLinkedInButton } from "../../components/Button/Button";

import OrSeperator from "../../components/OrSeperator/OrSeperator";
import { Link } from "react-router-dom";

const LoginScreen: FC = () => {
  return (
    <>
      <SignUpNavBar />
      <div className="sign-up-screen-1" style={{ marginTop: "0" }}>
        <div>
          <h1>Welcome Back!</h1>
          <p className="sign-up-screen-1__subheading">
            Access Your Personalized Dashboard and Engage with a Thriving Tech Community{" "}
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
          <p className="email-label" style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Password</div>
            <EyeSvg />
          </p>
          <input type="password" className="email-input" />
          <Button
            backgoundColor="var(--brand-colors-color, #5937CC)"
            style={{ border: "0px", width: "100%", justifyContent: "center", paddingBlock: "16px" }}
          >
            Login
          </Button>
          {/* <p className="privacy-policy">
            By signing up, you agree to our <span>Terms of Use</span> and{" "}
            <span>Privacy Policy</span>
          </p> */}
          <Link
            to=""
            style={{
              color: "var(--text-primary, #1E1E2F)",
              textAlign: "center",
              fontFamily: "Space Grotesk",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              textDecorationLine: "underline",
              display: "block",
              marginTop: "28px",
            }}
          >
            Forgot Password
          </Link>
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

export default LoginScreen;

//prettier-ignore
const EyeSvg=()=>(<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8822 0.88129L17.1463 0.145348C16.9383 -0.0626432 16.5543 -0.0306342 16.3143 0.257311L13.7541 2.80128C12.602 2.30533 11.3382 2.06533 10.0101 2.06533C6.05798 2.08127 2.6342 4.38524 0.986083 7.69745C0.890056 7.90544 0.890056 8.16137 0.986083 8.33736C1.75402 9.90538 2.90609 11.2014 4.34609 12.1774L2.2501 14.3053C2.0101 14.5453 1.97809 14.9293 2.13813 15.1373L2.87408 15.8733C3.08207 16.0812 3.46606 16.0492 3.70606 15.7613L17.754 1.7134C18.058 1.47354 18.09 1.08958 17.882 0.881565L17.8822 0.88129ZM10.8581 5.71318C10.5861 5.64916 10.2981 5.5692 10.0261 5.5692C8.66606 5.5692 7.57818 6.65723 7.57818 8.01714C7.57818 8.28914 7.64219 8.57709 7.72215 8.84911L6.65003 9.90515C6.33008 9.34519 6.15409 8.72109 6.15409 8.01717C6.15409 5.88919 7.86611 4.17717 9.99409 4.17717C10.6982 4.17717 11.3221 4.35315 11.8821 4.67311L10.8581 5.71318Z" fill="#1E1E2F"/>
<path d="M19.0347 7.6974C18.4747 6.57735 17.7386 5.56942 16.8267 4.75339L13.8507 7.6974V8.01735C13.8507 10.1453 12.1387 11.8574 10.0107 11.8574H9.69072L7.80273 13.7453C8.50679 13.8893 9.24274 13.9853 9.96274 13.9853C13.9149 13.9853 17.3386 11.6814 18.9868 8.35322C19.1307 8.12915 19.1307 7.90524 19.0347 7.69723L19.0347 7.6974Z" fill="#1E1E2F"/>
</svg>
)
