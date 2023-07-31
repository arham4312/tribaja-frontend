import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import LookingForNewRolesSection from "../../components/LookingForNewRolesSection/LookingForNewRolesSection";
import { ReviewsSection } from "../HomePage/HomePage";

import { ReactComponent as HrSeperator } from "../../assets/images/HrSeperator.svg";
import EventsSection from "../../components/EventsSection/EventsSection";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";
import Button from "../../components/Button/Button";
import CompaniesLogos from "../../components/CompaniesLogos/CompaniesLogos";
import { BenefitsOfHiringFromUs } from "../../components/BenefitsOfHiringFromUs/BenefitsOfHiringFromUs";
import ourTalentPf1 from "../../assets/images/ourTalentPf1.png";

import { CiLocationOn } from "react-icons/ci";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import purpleHeroSpirals from "../../assets/images/purpleHeroSpirals.png";
import emploerScreenHeroPerson from "../../assets/images/emploerScreenHeroPerson.png";

import "./EmployerScreen.scss";

const EmployerHireScreen = () => {
  return (
    <>
      <NavBar />
      <div className="employer-screen">
        <section
          className="hero-section"
          style={{
            background: `url(${purpleHeroSpirals}) no-repeat right center, linear-gradient(#bdafeb, #bdafeb)`,
          }}
        >
          <div className="hero-flex">
            <div className="hero-text">
              <h1>Discover Top Tech Talent for Your Team</h1>
              <p>
                Discover a Multitude of Tech Professionals and Foster Diversity in Your Organization
              </p>
              <div className="buttons">
                <Button>Start hiring now</Button>
                <Button type="INVERTED" style={{ background: "transparent" }}>
                  Post a job
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
        <BenefitsOfHiringFromUs />
        <section className="our-talent-section">
          <h2>Our talent </h2>
          <HrSeperator />
          <div className="talent-cards">
            <div className="talent-card">
              <div>
                <img src={ourTalentPf1} alt="our talent" />
              </div>
              <div className="talent-card-text">
                <div className="top-row">
                  <div className="first-colum">
                    <p className="name">Lara Wheeler</p>
                    <p className="position">Product manager</p>
                  </div>
                  <div className="buttons">
                    <Button>View Profile</Button>
                    <Button type="INVERTED">Contact</Button>
                  </div>
                </div>
                <div className="details-grid">
                  <div>
                    <CiLocationOn />
                    <p>Desired Roles</p>
                  </div>
                  <div>
                    <BiBriefcaseAlt2 />
                    <p>Experience</p>
                  </div>
                  <div>
                    <CiLocationOn />
                    <p>Desired Roles</p>
                  </div>
                  <p className="dim-text">Product Mangement</p>
                  <p className="dim-text">Senior 5 and up</p>
                  <p className="dim-text">NYC, USA</p>
                </div>
                <div className="skills-div">
                  <p>Skills</p>
                  <div className="chips">
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                  </div>
                </div>
                <hr />
                <p className="description">
                  Our platform offers a self-service tool that provides best-in-class
                  recommendations for upskilling and connecting with inclusive workplaces. With
                  Tribaja, you can find job opportunities that match your skills and career goals.
                  Our platform offers a self-service tool that provides best-in-class
                  recommendations for upskilling and connecting with inclusive workplaces.
                </p>
              </div>
            </div>
            <div className="talent-card">
              <div>
                <img src={ourTalentPf1} alt="our talent" />
              </div>
              <div className="talent-card-text">
                <div className="top-row">
                  <div className="first-colum">
                    <p className="name">Lara Wheeler</p>
                    <p className="position">Product manager</p>
                  </div>
                  <div className="buttons">
                    <Button>View Profile</Button>
                    <Button type="INVERTED">Contact</Button>
                  </div>
                </div>
                <div className="details-grid">
                  <div>
                    <CiLocationOn />
                    <p>Desired Roles</p>
                  </div>
                  <div>
                    <BiBriefcaseAlt2 />
                    <p>Experience</p>
                  </div>
                  <div>
                    <CiLocationOn />
                    <p>Desired Roles</p>
                  </div>
                  <p className="dim-text">Product Mangement</p>
                  <p className="dim-text">Senior 5 and up</p>
                  <p className="dim-text">NYC, USA</p>
                </div>
                <div className="skills-div">
                  <p>Skills</p>
                  <div className="chips">
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                    <p>Skill 1</p>
                  </div>
                </div>
                <hr />
                <p className="description">
                  Our platform offers a self-service tool that provides best-in-class
                  recommendations for upskilling and connecting with inclusive workplaces. With
                  Tribaja, you can find job opportunities that match your skills and career goals.
                  Our platform offers a self-service tool that provides best-in-class
                  recommendations for upskilling and connecting with inclusive workplaces.
                </p>
              </div>
            </div>
          </div>
        </section>
        <EventsSection />
        <HowItWorksSection />
        <ReviewsSection />
        <LookingForNewRolesSection />
      </div>
      <Footer />
    </>
  );
};

export default EmployerHireScreen;
