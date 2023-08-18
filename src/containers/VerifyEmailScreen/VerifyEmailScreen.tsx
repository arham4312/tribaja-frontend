import React, { FC } from "react";
import SignUpNavBar from "../../components/SignUpNavBar/SignUpNavBar";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import "./VerifyEmailScreen.scss";
import { Link } from "react-router-dom";

const VerifyEmailScreen: FC = () => {
  return (
    <>
      <SignUpNavBar />
      <div className="verify-email-screen">
        {/* <VerifyEmail /> */}
        <VerifiedEmail />
      </div>
    </>
  );
};

export default VerifyEmailScreen;

const VerifyEmail: FC = () => {
  return (
    <div className="verify-email">
      <VerifyEamilSvg />
      <h1>Verify your email</h1>
      <p>
        To keep a trusted and safe community, we’ve sent an email OTP to xyzmail@gmail.com for
        verification, and you’ll only do this once.
      </p>
      <InputField label="Enter OTP" style={{ display: "flex", width: "100%" }}>
        <input type="text" style={{ textAlign: "center" }} />
      </InputField>
      <Button
        style={{
          background: "var(--brand-colors-color, #5937CC)",
          border: "none",
          marginTop: "32px",
          marginBottom: "19px",
        }}
      >
        Verify my email
      </Button>
      <p className="change-resend-mail">
        Not the correct email?&nbsp;
        <Link to="#">Change email address</Link>
        &nbsp; or &nbsp;
        <Link to="#">Resend email</Link>
      </p>
    </div>
  );
};
const VerifiedEmail: FC = () => {
  return (
    <div className="verify-email">
      <div style={{ position: "relative", left: "24px" }}>
        <VerifiedEmailSvg />
      </div>
      <h1>Verified</h1>
      <p>
        Congratulations and Welcome to Tribaja Your email is Verified and now you can login and
        continue using our services.
      </p>

      <Button
        style={{
          background: "var(--brand-colors-color, #5937CC)",
          border: "none",
          width: "100%",
        }}
      >
        Login
      </Button>
    </div>
  );
};

const VerifyEamilSvg = () => {
  /* prettier-ignore */
  return( 
  <svg width="124" height="87" viewBox="0 0 124 87" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path d="M7.25 30.8125C7.25 18.125 14.5 12.6875 25.375 12.6875H61.625C72.5 12.6875 79.75 18.125 79.75 30.8125V56.1875C79.75 68.875 72.5 74.3125 61.625 74.3125H25.375" stroke="#1E1E2F" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M61.625 32.625L50.2787 41.6875C46.545 44.66 40.4187 44.66 36.685 41.6875L25.375 32.625M7.25 59.8125H29M7.25 45.3125H18.125" stroke="#1E1E2F" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="72" width="52" height="52" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_760_7044" transform="scale(0.0192308)" />
      </pattern>
      <image id="image0_760_7044" width="52" height="52" xlinkHref="data:image/png;base64,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"></image>
    </defs>
  </svg>
)
};

const VerifiedEmailSvg = () => {
  /* prettier-ignore */
  return(<svg width="124" height="87" viewBox="0 0 124 87" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<path d="M43.5 79.75C63.4375 79.75 79.75 63.4375 79.75 43.5C79.75 23.5625 63.4375 7.25 43.5 7.25C23.5625 7.25 7.25 23.5625 7.25 43.5C7.25 63.4375 23.5625 79.75 43.5 79.75Z" stroke="#1E1E2F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.0938 43.5L38.3525 53.7587L58.9062 33.2412" stroke="#1E1E2F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="72" width="52" height="52" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_760_7089" transform="scale(0.0192308)"/>
</pattern>
<image id="image0_760_7089" width="52" height="52" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>
)
};
