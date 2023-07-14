import React, { FC } from "react";
import howWeHelpImage from "../../assets/images/howWeHelpImage.png";
import { ReactComponent as ThumbsUp } from "../../assets/images/ThumbsUp.svg";
import { ReactComponent as HrSeperator } from "../../assets/images/HrSeperator.svg";
import "./HowWeHelpTalentSection.scss";

const HowWeHelpTalentSection: FC = () => {
  return (
    <>
      <div className="how-we-help-section">
        <h2>How we help talent?</h2>
        <HrSeperator />
        <div className="help-section-flex">
          <img src={howWeHelpImage} alt="how we help" />
          <div className="text">
            <p className="text-title">
              Are you tired of being stuck in a dead-end job? Do you want to upskill and find better
              job opportunities? Tribaja is here to help you!
            </p>
            <div className="cards">
              <div className="card">
                <div className="svg-wrapper">
                  <ThumbsUp />
                </div>
                <div>
                  <p>Custom Career Matches & Recommendations</p>
                  <p>
                    Our platform offers a self-service tool that provides best-in-class
                    recommendations for upskilling and connecting with inclusive workplaces. With
                    Tribaja, you can find job opportunities that match your skills and career goals.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="svg-wrapper">
                  <ThumbsUp />
                </div>
                <div>
                  <p>Custom Career Matches & Recommendations</p>
                  <p>
                    Our platform offers a self-service tool that provides best-in-class
                    recommendations for upskilling and connecting with inclusive workplaces. With
                    Tribaja, you can find job opportunities that match your skills and career goals.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="svg-wrapper">
                  <ThumbsUp />
                </div>
                <div>
                  <p>Custom Career Matches & Recommendations</p>
                  <p>
                    Our platform offers a self-service tool that provides best-in-class
                    recommendations for upskilling and connecting with inclusive workplaces. With
                    Tribaja, you can find job opportunities that match your skills and career goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeHelpTalentSection;
