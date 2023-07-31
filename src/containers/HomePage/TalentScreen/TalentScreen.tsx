import React, { useRef, FC } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import HowWeHelpTalentSection from "../../../components/HowWeHelpTalentSection/HowWeHelpTalentSection";
import Footer from "../../../components/Footer/Footer";
import LookingForNewRolesSection from "../../../components/LookingForNewRolesSection/LookingForNewRolesSection";
import { ReviewsSection } from "../HomePage";
import { ReactComponent as HrSeperator } from "../../../assets/images/HrSeperator.svg";
import { ReactComponent as EverNoteLogoNText } from "../../../assets/icons/EverNoteLogoNText.svg";
import { ReactComponent as GoogleLogo } from "../../../assets/icons/googleLogo.svg";
import talentPageHeroImage from "../../../assets/images/talentPageHeroImage.png";
import talentAtWork1 from "../../../assets/images/talentAtWork1.png";
import talentAtWork2 from "../../../assets/images/talentAtWork2.png";
import talentAtWork3 from "../../../assets/images/talentAtWork3.png";
import talentAtWork4 from "../../../assets/images/talentAtWork4.png";

import { CiLocationOn } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { PiArrowRightThin } from "react-icons/pi";
import { ReactComponent as CreateProfileHowItWorks } from "../../../assets/images/CreateProfileHowItWorks.svg";
import EventsSection from "../../../components/EventsSection/EventsSection";

import HowItWorksSection from "../../../components/HowItWorksSection/HowItWorksSection";

import "./TalentScreen.scss";
import Button from "../../../components/Button/Button";

const TalentScreen: FC = () => {
  return (
    <>
      <NavBar />
      <div className="talent-screen">
        <section className="hero-section">
          <div>
            <h1>Embark on a Journey of Exploration, Creation, and Growth</h1>
            <p>
              Get connected to recruiters & a supportive community in tech and startup. The best
              part is, it's absolutely FREE!
            </p>
            <Button>Signup Now</Button>
          </div>
          <div>
            <img src={talentPageHeroImage} />
          </div>
        </section>
        <section className="talent-at-work">
          <h2>Powering Careers: Talent at Work in Leading Companies</h2>
          <div className="imges">
            <img src={talentAtWork1} />
            <img src={talentAtWork2} />
            <img src={talentAtWork3} />
            <img src={talentAtWork4} />
          </div>
        </section>
        <HowWeHelpTalentSection />
        <section className="recommended-jobs-section">
          <h2>Recommended Jobs</h2>
          <HrSeperator />
          <div className="cards">
            <div className="card">
              <div>
                <div className="svg-wrapper">
                  <GoogleLogo />
                </div>
                <p>3 hours ago</p>
              </div>
              <p className="job-title">Android Software Engineer </p>
              <div className="chips">
                <p className="chip">Full Time</p>
                <p className="chip">Remote</p>
                <p className="chip">Mid Level</p>
              </div>
              <div className="location-div">
                <div className="location">
                  <CiLocationOn />
                  <p>Sans Francisco, CA</p>
                </div>
                <div className="location">
                  <CiLocationOn />
                  <p>1000-45000 Employess</p>
                </div>
              </div>
              <div className="buttons">
                <Button className="save-btn">Save</Button>
                <Button type="INVERTED">View</Button>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="svg-wrapper">
                  <GoogleLogo />
                </div>
                <p>3 hours ago</p>
              </div>
              <p className="job-title">Android Software Engineer </p>
              <div className="chips">
                <p className="chip">Full Time</p>
                <p className="chip">Remote</p>
                <p className="chip">Mid Level</p>
              </div>
              <div className="location-div">
                <div className="location">
                  <CiLocationOn />
                  <p>Sans Francisco, CA</p>
                </div>
                <div className="location">
                  <CiLocationOn />
                  <p>1000-45000 Employess</p>
                </div>
              </div>
              <div className="buttons">
                <Button className="save-btn">Save</Button>
                <Button type="INVERTED">View</Button>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="svg-wrapper">
                  <GoogleLogo />
                </div>
                <p>3 hours ago</p>
              </div>
              <p className="job-title">Android Software Engineer </p>
              <div className="chips">
                <p className="chip">Full Time</p>
                <p className="chip">Remote</p>
                <p className="chip">Mid Level</p>
              </div>
              <div className="location-div">
                <div className="location">
                  <CiLocationOn />
                  <p>Sans Francisco, CA</p>
                </div>
                <div className="location">
                  <CiLocationOn />
                  <p>1000-45000 Employess</p>
                </div>
              </div>
              <div className="buttons">
                <Button className="save-btn">Save</Button>
                <Button type="INVERTED">View</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="courses-section">
          <h2>Courses</h2>
          <HrSeperator />
          <div className="courses-cards">
            <div className="card">
              <EverNoteLogoNText />
              <h3>All About The Data</h3>
              <div className="chips">
                <p className="chip">Training</p>
                <p className="chip">Bootcamp</p>
                <p className="chip">Workshop/Webinars</p>
                <p className="chip">Certification</p>
                <p className="chip">Hackathon</p>
              </div>
              <p className="description">
                Aim to create new candidate pools from previously underrepresented groups in tech,
                and our continued efforts to support those candidates through admissions (including
                scholarships), classwork, and on to job hunting through mentorship and networking
                support
              </p>
              <div className="button-group">
                <Button>Enroll</Button>
                <Button type="INVERTED">Learn More</Button>
              </div>
            </div>
            <div className="card">
              <EverNoteLogoNText />
              <h3>All About The Data</h3>
              <div className="chips">
                <p className="chip">Training</p>
                <p className="chip">Bootcamp</p>
                <p className="chip">Workshop/Webinars</p>
                <p className="chip">Certification</p>
                <p className="chip">Hackathon</p>
              </div>
              <p className="description">
                Aim to create new candidate pools from previously underrepresented groups in tech,
                and our continued efforts to support those candidates through admissions (including
                scholarships), classwork, and on to job hunting through mentorship and networking
                support
              </p>
              <div className="button-group">
                <Button>Enroll</Button>
                <Button type="INVERTED">Learn More</Button>
              </div>
            </div>
            <div className="card">
              <EverNoteLogoNText />
              <h3>All About The Data</h3>
              <div className="chips">
                <p className="chip">Training</p>
                <p className="chip">Bootcamp</p>
                <p className="chip">Workshop/Webinars</p>
                <p className="chip">Certification</p>
                <p className="chip">Hackathon</p>
              </div>
              <p className="description">
                Aim to create new candidate pools from previously underrepresented groups in tech,
                and our continued efforts to support those candidates through admissions (including
                scholarships), classwork, and on to job hunting through mentorship and networking
                support
              </p>
              <div className="button-group">
                <Button>Enroll</Button>
                <Button type="INVERTED">Learn More</Button>
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

export default TalentScreen;
