import React, { FC } from "react";
import { ReactComponent as HrSeperator } from "../../assets/images/HrSeperator.svg";
import { ReactComponent as CreateProfileHowItWorks } from "../../assets/images/CreateProfileHowItWorks.svg";
import "./HowItWorksSection.scss";

const HowItWorksSection: FC = () => {
  return (
    <>
      <div className="how-it-works-section">
        <h2>How it works</h2>
        <HrSeperator />
        <div className="grid-container">
          <div className="grid-item tranparent"></div>
          <div className="grid-item">
            <div className="svg-wrapper">
              <CreateProfileHowItWorks />
            </div>
          </div>
          <div className="grid-item horizontal-line">
            <RightArrowSvg />
          </div>
          <div className="grid-item">
            <div className="svg-wrapper">
              <CreateProfileHowItWorks />
            </div>
          </div>
          <div className="grid-item horizontal-line">
            <RightArrowSvg />
          </div>
          <div className="grid-item">
            <div className="svg-wrapper">
              <CreateProfileHowItWorks />
            </div>
          </div>
          <div className="grid-item tranparent"></div>
          <div className="colums">
            <p>Create a free profile</p>
            <p>
              This is an opportunity to showcase who you are. Take your time and
              make a great impression.
            </p>
          </div>
          <div className="colums">
            <p>Create a free profile</p>
            <p>
              This is an opportunity to showcase who you are. Take your time and
              make a great impression.
            </p>
          </div>
          <div className="colums">
            <p>Create a free profile</p>
            <p>
              This is an opportunity to showcase who you are. Take your time and
              make a great impression.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const RightArrowSvg = () => {
  return (
    <svg
      width="325"
      height="8"
      viewBox="0 0 325 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M324.354 4.35358C324.549 4.15832 324.549 3.84174 324.354 3.64647L321.172 0.464494C320.976 0.269232 320.66 0.269232 320.464 0.464494C320.269 0.659756 320.269 0.976339 320.464 1.1716L323.293 4.00003L320.464 6.82846C320.269 7.02372 320.269 7.3403 320.464 7.53556C320.66 7.73082 320.976 7.73082 321.172 7.53556L324.354 4.35358ZM-4.37114e-08 4.5L324 4.50003L324 3.50003L4.37114e-08 3.5L-4.37114e-08 4.5Z"
        fill="#999999"
      />
    </svg>
  );
};

export default HowItWorksSection;
