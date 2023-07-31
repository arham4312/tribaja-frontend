import React from "react";
import SignUpNavBar from "../../components/SignUpNavBar/SignUpNavBar";
import SignUpFooter from "../../components/SignUpFooter/SignUpFooter";
import Button from "../../components/Button/Button";
import "./SignUpScreenOTP.scss";
import emailOtpImage from "../../assets/images/emailOtpImage.png";
import emailVerifiedTick from "../../assets/images/emailVerifiedTick.png";

type Props = {};

const SignUpScreenOTP = (props: Props) => {
  return (
    <div
      className="sign-up-otp-screen"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <SignUpNavBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: "1",
          flexDirection: "column",
          width: "400px",
          margin: "auto",
        }}
      >
        {/* <Step1 /> */}
        <Step2 />
      </div>
      <div style={{ marginTop: "auto" }}>
        <SignUpFooter />
      </div>
    </div>
  );
};

export default SignUpScreenOTP;

const Step1 = () => (
  <>
    <img src={emailOtpImage} />
    <h1>Verify your email</h1>
    <p className="otp-sent">
      To keep a trusted and safe community, we’ve sent an email OTP to xyzmail@gmail.com for
      verification, and you’ll only do this once.
    </p>
    <label>
      <p className="input-label">Enter OTP</p>
      <input type="text" className="input-text" />
    </label>
    <Button
      backgoundColor="var(--brand-colors-color, #5937CC)"
      style={{ border: "0px", width: "100%", justifyContent: "center", paddingBlock: "16px" }}
    >
      Verify my email
    </Button>
    <p className="resend-otp">
      Not the correct email?
      <span>Change email address</span>
      or
      <span>Resend email</span>
    </p>
  </>
);

const Step2 = () => (
  <>
    <img src={emailVerifiedTick} />
    <h1>Email verified</h1>
    <p className="otp-verified-text">
      Congratulations and Welcome to Tribaja Your email is Verified and now you can login and
      continue using our services.
    </p>
    <Button
      backgoundColor="var(--brand-colors-color, #5937CC)"
      style={{ border: "0px", width: "100%", justifyContent: "center", paddingBlock: "16px" }}
    >
      Login
    </Button>
  </>
);

const VerifyEmailImage = () => (
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Define the pattern */}
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_760_7044" transform="scale(0.0192308)" />
      </pattern>

      {/* Define the image */}
      <image
        id="image0_760_7044"
        width="52"
        height="52"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAF3ElEQVRogc1ZW4wcxRU9p6ene4wdwCgIgoWIYdf7CAISsCwwj2V3x2BBAgIs8kGIUfzDfiXODyBBcIAPXhIW4iElf+EjIlKQkPGCd8esEW/EQ0Q7M7s2OBGCgOOXCLG3u2fq8LFaM87uzHTXlLHP31T1PfeeqequqlOAI0TVoQuiyat/4orPFp4rIhqsRM67yBWfLZwJEngZjbfSFZ8t6IJEO9eGcVLbJ+JQ2Lt/Gfl+4oLXBk5GKK7VbgKxmMDpcXXpL1xw2qJjQdK6HKA/fNfC+yV3UzkrOk4cVQ/+FmBPQ9P5SbV4e6e8tujoHYqrxUtkMAFi8VEd0kHktTrsLpU7qs4C1oKi6tAFMNwB8tSF+gV9HnpmFXu2f25fXnZYTblkavhyiK81EwMABJdFJvdBUhm8zL687Mg0QhKYVIq/EfQMSD9lWB0ym4J88Ai7RyOLGjMhlSBNDixJPH+9ATcSWG6TSNK/SNwT9NaeJydqNhxpsKAgTQ4siZj/Uc7j2XWZWwn8CuAiFwklfUXgTwLeDgPvPXZt2+OCdw4Lv0MnoRbm6wY0MakDAr9xlpE8BKIGUIhi5+tVuimndbm4sn+dyIcInmuTSMAbOZoH/Z7SKyRkw5EGGT8KA340lRuh4WMg86ligH9TZmPYX/qrXYnZYLUOxdNrVqmmURBLWz0nYVcYcJBd2z6zKy87rBfWmcrQCorvNF2LpHJAXcm+0j7r6izQ0dYnqQxdasQd86af9E2QNxexe/snHVVngY6+Mvm+0lsi757XQfz6eIgBHOy2w0LylKQvG5reDPvG/94pry06FsTlEzOehz8e+e3Vf9cpZydwsrDlcfg5SAmkStCz/V0XnICdk+REEHvf+C/ALSBfcMF3hNdgJen/LEtM2h1z++SethDeP13xAbNOkqg6gL+kjXHnyxHTdSTODnPauTYEeCvFW6SLU+1KAIeC/Jw3HSL+whVfXEtuBrEYxNJ46rQb08Y58eVcQ1qXi6sHJufMFwm7wr79/Wn8vuNmN7XC/ztJJLriymkb08SecCPU3ElCTB+rghVjH7WKP6FGKJ66+kIJpXliAIAIVMPz2nnF6a04ThhBydTw5TK5HQBObvoQ0R0l4XvaOXhes0dSC4qqwzdkKzEdJDAuFzeYOl4FeEq750meE9e8D+Py0Ig0/5VJfwSvHnwh7BtzZsRrcmBJwtztBtxIsuk/3poE7yhX31To2T4615RKUFIdutYYvhgsnjmD57x+wCp3g5NkZG4D8EtXThKksogSiddTTTkjbwRkPjq8yN6Eb3CSQO1x6iSBXQBWUFzadoRmpgbX0uS2AgCkg0Gu1s2eib2dluDESZK+oocnA+nZuaN+S0GaGlwW1b33SZ7R0PpS2Dd+vU0BCxc14EdV/04Kj6d1kgDUAT0aFGqbuHxiprGjqSBVV/8gNie9BmL+RTDxQNg7dl+20lsjqRZXG6MtrS4AAEDQXlJDYW/p44X6F7aCKwM/juVvBdnXjJjSE/l8/i6XBnw7J0nQXvq6qtW901GC4snhnxpiA4k70nyBBOwBzMOhH/yZ3aNfZ5cwH02dJMDQq1/a7kTMqFq8DUZrRKwl+EOrKoT/gXpVQqnQP/6EFUcDZirF3xN47OgcujfsH3+wXeyREYrKa84XzAiJ9dnWB71I4mXj18YKXRO7MtTdnHH3QCE67O8meSYwd3w4tZf8W71d7Lx3SNXiWbGwGcAtbdJOUVgf9I+/bVl3S8TV4TslPg0AEq4r9I9tTRPX9CsXl4dGBG5e6KZOwI6Qh34+a44cG8x+ZRftE/GfQt/4srRxTXcKQX/paXi8Y4FU/wh9/5pjKQZocJKATKZly61P2Df"
      />
    </defs>

    {/* Other SVG elements here */}
  </svg>
);
