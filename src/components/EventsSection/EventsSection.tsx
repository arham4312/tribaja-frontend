import React, { FC, useRef } from "react";
import largetTechEvent from "../../assets/images/largetTechEvent.png";
import { ReactComponent as HrSeperator } from "../../assets/images/HrSeperator.svg";
import "./EventsSection.scss";

const EventsSection = () => {
  return (
    <>
      <section className="events-section">
        <h2>Events</h2>
        <HrSeperator />
        <div className="events-cards">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
    </>
  );
};

export const EventCard: FC = () => {
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

export default EventsSection;
