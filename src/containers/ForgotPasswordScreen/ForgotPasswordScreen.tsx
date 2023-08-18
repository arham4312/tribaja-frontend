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

const ForgotPasswordScreen: FC = () => {
  return (
    <>
      <SignUpNavBar />
      <div className="sign-up-screen-1" style={{ marginTop: "0" }}>
        {/* <EnterEamil /> */}
        {/* <EnterOTP /> */}
        {/* <EnterNewPassword /> */}
        {/* <ImgContainer /> */}
        <PasswordResetSuccess />
      </div>
      <SignUpFooter />
    </>
  );
};

export default ForgotPasswordScreen;

//prettier-ignore
const EyeSvg=()=>(<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8822 0.88129L17.1463 0.145348C16.9383 -0.0626432 16.5543 -0.0306342 16.3143 0.257311L13.7541 2.80128C12.602 2.30533 11.3382 2.06533 10.0101 2.06533C6.05798 2.08127 2.6342 4.38524 0.986083 7.69745C0.890056 7.90544 0.890056 8.16137 0.986083 8.33736C1.75402 9.90538 2.90609 11.2014 4.34609 12.1774L2.2501 14.3053C2.0101 14.5453 1.97809 14.9293 2.13813 15.1373L2.87408 15.8733C3.08207 16.0812 3.46606 16.0492 3.70606 15.7613L17.754 1.7134C18.058 1.47354 18.09 1.08958 17.882 0.881565L17.8822 0.88129ZM10.8581 5.71318C10.5861 5.64916 10.2981 5.5692 10.0261 5.5692C8.66606 5.5692 7.57818 6.65723 7.57818 8.01714C7.57818 8.28914 7.64219 8.57709 7.72215 8.84911L6.65003 9.90515C6.33008 9.34519 6.15409 8.72109 6.15409 8.01717C6.15409 5.88919 7.86611 4.17717 9.99409 4.17717C10.6982 4.17717 11.3221 4.35315 11.8821 4.67311L10.8581 5.71318Z" fill="#1E1E2F"/>
<path d="M19.0347 7.6974C18.4747 6.57735 17.7386 5.56942 16.8267 4.75339L13.8507 7.6974V8.01735C13.8507 10.1453 12.1387 11.8574 10.0107 11.8574H9.69072L7.80273 13.7453C8.50679 13.8893 9.24274 13.9853 9.96274 13.9853C13.9149 13.9853 17.3386 11.6814 18.9868 8.35322C19.1307 8.12915 19.1307 7.90524 19.0347 7.69723L19.0347 7.6974Z" fill="#1E1E2F"/>
</svg>
)

const EnterEamil = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Forgot Password</h1>
      <p className="sign-up-screen-1__subheading">
        Reset Your Password and Regain Access to Your Tribaja Account. We will send you a
        confirmation email
      </p>

      <p className="email-label">Please enter your email</p>
      <input type="email" className="email-input" />
      <Button
        backgoundColor="var(--brand-colors-color, #5937CC)"
        style={{ border: "0px", width: "100%", justifyContent: "center", paddingBlock: "16px" }}
      >
        Login
      </Button>
    </div>
  );
};

const EnterOTP = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>OTP Verification</h1>
      <p className="sign-up-screen-1__subheading">
        Confirm Your Identity with the OTP, Check Your Email, and Reset Your Password to Regain
        Access to Tribaja
      </p>

      <p className="email-label">Enter OTP</p>
      <input type="email" className="email-input" />
      <Button
        backgoundColor="var(--brand-colors-color, #5937CC)"
        style={{ border: "0px", width: "100%", justifyContent: "center", paddingBlock: "16px" }}
      >
        Login
      </Button>
    </div>
  );
};

const EnterNewPassword = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>New Password</h1>
      <p className="sign-up-screen-1__subheading">
        Connect with our community of mentors and users from 141+ countries around the world.
      </p>

      <p className="email-label" style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Password</div>
        <EyeSvg />
      </p>
      <input type="email" className="email-input" />

      <p className="email-label" style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Password</div>
        <EyeSvg />
      </p>
      <input type="email" className="email-input" />
      <Button
        backgoundColor="var(--brand-colors-color, #5937CC)"
        style={{ border: "0px", width: "100%", justifyContent: "center", paddingBlock: "16px" }}
      >
        Continue
      </Button>
    </div>
  );
};

const ImgContainer = () => {
  return (
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
  );
};

const PasswordResetSuccess = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "unset",
        minHeight: "calc(100vh - 80px)",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <div style={{ position: "relative", left: "12px" }}>
        <TickSvg />
      </div>
      <h1 style={{ marginTop: "24px", marginBottom: "15px", textAlign: "center" }}>
        Password Reset Successful
      </h1>
      <p style={{ maxWidth: "400px", marginBottom: "32px", textAlign: "center" }}>
        Congratulations! Your password has been successfully reset. You can now securely access your
        Tribaja account with your new password.
      </p>
      <Button
        backgoundColor="var(--brand-colors-color, #5937CC)"
        style={{ border: "0px", width: "100%", justifyContent: "center", paddingBlock: "16px" }}
      >
        Continue
      </Button>
    </div>
  );
};

const TickSvg = () => {
  // prettier-ignore
  return (<svg width="124" height="87" viewBox="0 0 124 87" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M43.5 79.75C63.4375 79.75 79.75 63.4375 79.75 43.5C79.75 23.5625 63.4375 7.25 43.5 7.25C23.5625 7.25 7.25 23.5625 7.25 43.5C7.25 63.4375 23.5625 79.75 43.5 79.75Z" stroke="#1E1E2F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28.0938 43.5L38.3525 53.7587L58.9062 33.2412" stroke="#1E1E2F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="72" width="52" height="52" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_768_8042" transform="scale(0.0192308)"/>
    </pattern>
    <image id="image0_768_8042" width="52" height="52" xlinkHref="data:image/png;base64,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"/>
    </defs>
    </svg>)
};
