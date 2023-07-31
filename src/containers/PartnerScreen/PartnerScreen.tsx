import React from "react";
import "./PartnerScreen.scss";
import NavBar from "../../components/NavBar/NavBar";
import CompaniesLogos from "../../components/CompaniesLogos/CompaniesLogos";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";
import { ReviewsSection } from "../HomePage/HomePage";
import LookingForNewRolesSection from "../../components/LookingForNewRolesSection/LookingForNewRolesSection";
import Footer from "../../components/Footer/Footer";
import { SignupCTATalentPool } from "../../components/SignupCTATalentPool/SignupCTATalentPool";
import partnerCardBackground from "../../assets/images/partnerCardBackground.png";
import Button from "../../components/Button/Button";
import emploerScreenHeroPerson from "../../assets/images/emploerScreenHeroPerson.png";
import { ReactComponent as HrSeperator } from "../../assets/images/HrSeperator.svg";
import opportunityCard1 from "../../assets/images/opportunityCard1.png";

import "./PartnerScreen.scss";

const PartnerScreen = () => {
  return (
    <>
      <NavBar />

      <div className="partner-screen">
        <section
          className="hero-section"
          style={{
            background: `url(${partnerCardBackground}) no-repeat right center, linear-gradient(#FBAD84, #FBAD84)`,
          }}
        >
          <div className="hero-flex">
            <div className="hero-text">
              <h1>Collaborating for Inclusive Tech Education</h1>
              <p>
                Empowering Diverse Communities through Partnerships for Upskilling and Advancement{" "}
              </p>
              <div className="buttons">
                <Button>Become a partner</Button>
                <Button type="INVERTED" style={{ background: "transparent" }}>
                  Add a resource
                </Button>
              </div>
            </div>
            <div className="hero-image">
              <img src={emploerScreenHeroPerson} alt="hero" />
            </div>
          </div>
        </section>
        <div className="logos">
          <p>Proud Partnerships</p>
          <CompaniesLogos />
        </div>
        <section className="unlocking-opportunites-section">
          <h2>Unlocking Opportunities for Collaboration</h2>
          <HrSeperator />
          <div className="opportunities-cards">
            <div className="opportunities-card">
              <img src={opportunityCard1} />
              <h3>Amplified Reach and Exposure</h3>
              <p>
                By partnering with Tribaja, your organization gains access to a wider audience and
                increased visibility within the tech community.
              </p>
            </div>
            <div className="opportunities-card">
              <img src={opportunityCard1} />
              <h3>Amplified Reach and Exposure</h3>
              <p>
                By partnering with Tribaja, your organization gains access to a wider audience and
                increased visibility within the tech community.
              </p>
            </div>
            <div className="opportunities-card">
              <img src={opportunityCard1} />
              <h3>Amplified Reach and Exposure</h3>
              <p>
                By partnering with Tribaja, your organization gains access to a wider audience and
                increased visibility within the tech community.
              </p>
            </div>
          </div>
        </section>
        <section className="featured-programm-section">
          <h2>Our Featured Programs</h2>
          <HrSeperator />
          <p>
            Connecting under supported communities to resources, training, & better employment
            opportunities .
          </p>
          <div className="featured-programm-cards">
            <div className="featured-programm-card"></div>
          </div>
        </section>
        {/* <SignupCTATalentPool /> */}
        <HowItWorksSection />
        <ReviewsSection />
        <LookingForNewRolesSection />
      </div>
      <Footer />
    </>
  );
};

export default PartnerScreen;
