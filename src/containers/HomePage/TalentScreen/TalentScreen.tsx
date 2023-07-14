/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, FC } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import HowWeHelpTalentSection from "../../../components/HowWeHelpTalentSection/HowWeHelpTalentSection";
import Footer from "../../../components/Footer/Footer";
import LookingForNewRolesSection from "../../../components/LookingForNewRolesSection/LookingForNewRolesSection";
import { ReviewsSection } from "../HomePage";
import { ReactComponent as HrSeperator } from "../../../assets/images/HrSeperator.svg";
import { ReactComponent as EverNoteLogoNText } from "../../../assets/icons/EverNoteLogoNText.svg";
import largetTechEvent from "../../../assets/images/largetTechEvent.png";

import "./TalentScreen.scss";
import Button from "../../../components/Button/Button";

const TalentScreen: FC = () => {
  return (
    <>
      <div className="talent-screen">
        <NavBar />
        <HowWeHelpTalentSection />
        <section className="events-section">
          <h2>Events</h2>
          <EverNoteLogoNText />
          <div className="events-cards">
            <EventCard />
            <EventCard />
            <EventCard />
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
        <ReviewsSection />
        <LookingForNewRolesSection />
      </div>
      <Footer />
    </>
  );
};

const EventCard: FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  return (
    <>
      <div className="event-card" style={{ width: imgRef.current?.width || "auto" }}>
        {/* <div className="event-card"> */}
        <img src={largetTechEvent} ref={imgRef} />
        <div className="card-text">
          <div className="date">
            <p>APR</p>
            <p>14</p>
          </div>
          <div className="event-info">
            <p>Largest hybrid tech event on the east coast. </p>
            <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TalentScreen;
