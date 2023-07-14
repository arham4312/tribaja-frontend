import React from "react";
import Button from "../Button/Button";
import lookingForNewRolesImage from "../../assets/images/lookingForNewRolesImage.png";
import "./LookingForNewRolesSection.scss";

function LookingForNewRolesSection() {
  return (
    <>
      <section className="new-roles-section">
        <div>
          <h2>Looking for new roles & events in tech?</h2>
          <p>Looking for new roles & events in tech?</p>
          <div className="input-and-button">
            <input type="email" placeholder="Enter your email" />
            <Button>Subsribe</Button>
          </div>
        </div>
        <div>
          <img src={lookingForNewRolesImage} alt="looking for new roles" />
        </div>
      </section>
    </>
  );
}

export default LookingForNewRolesSection;
