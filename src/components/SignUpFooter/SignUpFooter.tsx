import React, { FC } from "react";
import "./SignUpFooter.scss";

const SignUpFooter: FC = () => {
  return (
    <>
      <div className="sign-up-footer">
        <p>© 2023 Tribaja</p>
        <div>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </>
  );
};

export default SignUpFooter;
