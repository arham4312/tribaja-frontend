import React from "react";
import "./SignupCTATalentPool.scss";
import Button from "../Button/Button";
import signUpTalentPoolCTA from "../../assets/images/signUpTalentPoolCTA.png";

export const SignupCTATalentPool = () => {
  return (
    <div className="sing-up-cta-talent-pool">
      <div className="img-div">
        {/* <SingUpSVG /> */}
        <img src={signUpTalentPoolCTA} alt="signUpTalentPoolCTA" />
      </div>
      <div className="text-div">
        <p>Sign up and get access to our full range talent pool.</p>
        <Button>Sign up</Button>
      </div>
    </div>
  );
};
