import React from "react";
import { FC } from "react";
import ReviewCards from "../../components/ReviewCards/ReviewCards";

import circles from "../../assets/images/5circles.png";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.scss";
import Button from "../../components/Button/Button";
import { ReactComponent as GoogleLogo } from "../../assets/icons/googleLogo.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/icons/youtubeLogo.svg";
import { ReactComponent as MicrosoftLogo } from "../../assets/icons/microSoftLogo.svg";
import { ReactComponent as AmazonLogo } from "../../assets/icons/amazonLogo.svg";
import { ReactComponent as AdobeLogo } from "../../assets/icons/adobeLogo.svg";
import { ReactComponent as SpotifyLogo } from "../../assets/icons/spotifyLogo.svg";
import { ReactComponent as UberLogo } from "../../assets/icons/uberLogo.svg";
import talentCardImage from "../../assets/images/TalentCardImage.png";
import employersCardImage from "../../assets/images/EmployersCardImage.png";
import scountCardImage from "../../assets/images/ScountCardImage.png";
import tradingPartnerCardImage from "../../assets/images/TradingPartnerCardImage.png";

// spotify

const HomePage: FC = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${circles})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
        className="homepage"
      >
        <NavBar />
        <section className="hero-section">
          <h1 className="hero-text">Your trusted career guide for life's career changes</h1>
          <p className="hero-subtext"> Your trusted career guide for life's career changes </p>
          <Button style={{ display: "block", margin: "auto", marginBottom: "40px" }}>
            Let's Start
          </Button>
          <div className="homepage__cards">
            <div style={{ backgroundImage: `url(${talentCardImage})` }}></div>
            <div style={{ backgroundImage: `url(${employersCardImage})` }}></div>
            <div style={{ backgroundImage: `url(${scountCardImage})` }}></div>
            <div style={{ backgroundImage: `url(${tradingPartnerCardImage})` }}></div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <GoogleLogo />
            <YoutubeLogo />
            <MicrosoftLogo />
            <AmazonLogo />
            <AdobeLogo />
            <SpotifyLogo />
            <UberLogo />
          </div>
        </section>
        <ReviewCards />
      </div>
    </>
  );
};

export default HomePage;
