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

import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { ReactComponent as HrSeperator } from "../../assets/images/HrSeperator.svg";
import { ReactComponent as SymbolHeartInHand } from "../../assets/images/SymbolHeartInHand.svg";
import communityImpactImage from "../../assets/images/communityImpactImage.png";
import { ReactComponent as CreateProfile } from "../../assets/images/CreateProfile.svg";
import { ReactComponent as DownArrow1pxgrey } from "../../assets/images/DownArrow1pxgrey.svg";
import howItWorksImage from "../../assets/images/howItWorksImage.png";
import talentCardImageFull from "../../assets/images/talentCardImageFull.png";
import employerCardImage from "../../assets/images/employerCardImage.png";
import scoutCardImageFull from "../../assets/images/scoutCardImageFull.png";
import employerCardBackground from "../../assets/images/employerCardBackground.png";

const HomePage: FC = () => {
  const linearGradient = "linear-gradient(180deg, rgba(65, 65, 65, 0) 58.33%, #111 100%)";

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
            <div style={{ backgroundImage: `${linearGradient},url(${talentCardImage})` }}>
              <p>Talent</p>
              <Link to="/talent">
                Join Now
                <FiArrowUpRight />
              </Link>
            </div>
            <div style={{ backgroundImage: `${linearGradient},url(${employersCardImage})` }}>
              <p>Employers</p>
              <Link to="/talent">
                Join Now <FiArrowUpRight />
              </Link>
            </div>
            <div style={{ backgroundImage: `${linearGradient},url(${scountCardImage})` }}>
              <p>Scout</p>
              <Link to="/talent">
                Join Now <FiArrowUpRight />
              </Link>
            </div>
            <div style={{ backgroundImage: `${linearGradient},url(${tradingPartnerCardImage})` }}>
              <p>Trainings Partner</p>
              <Link to="/talent">
                Join Now <FiArrowUpRight />
              </Link>
            </div>
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
        <section className="community-impact-section">
          <h2>Our Community Impact</h2>
          <HrSeperator />
          <p className="top-para">
            We are so excited and proud of our product. It's really easy to create a landing page
            for your awesome product.
          </p>
          <div className="community-impact-section__details">
            <div className="community-impact-section__cards">
              <h3>Some Numbers about us</h3>
              <div>
                <div className="card">
                  <p>78%</p>
                  <p>BiPOC Community</p>
                  <SymbolHeartInHand />
                </div>
                <div className="card">
                  <p>78%</p>
                  <p>BiPOC Community</p>
                  <SymbolHeartInHand />
                </div>
                <div className="card">
                  <p>78%</p>
                  <p>BiPOC Community</p>
                  <SymbolHeartInHand />
                </div>
                <div className="card">
                  <p>78%</p>
                  <p>BiPOC Community</p>
                  <SymbolHeartInHand />
                </div>
              </div>
            </div>
            <div className="community-impact-section__image">
              <img src={communityImpactImage} alt="community impact" />
            </div>
          </div>
        </section>
        <section className="how-it-works-section">
          <h2>How It Works?</h2>
          <HrSeperator />
          <div className="how-it-works__details">
            <div className="cards">
              <div className="card">
                <div className="svg-wrapper">
                  <CreateProfile />
                </div>
                <div className="works-text">
                  <p>Create a free profile</p>
                  <p>
                    This is an opportunity to showcase who you are. Take your time and make a great
                    impression.
                  </p>
                </div>
                <div className="down-arrow-wrapper">
                  <DownArrow1pxgrey />
                </div>
              </div>
              <div className="card">
                <div className="svg-wrapper">
                  <CreateProfile />
                </div>
                <div className="works-text">
                  <p>Create a free profile</p>
                  <p>
                    This is an opportunity to showcase who you are. Take your time and make a great
                    impression.
                  </p>
                </div>
                <div className="down-arrow-wrapper">
                  <DownArrow1pxgrey />
                </div>
              </div>
              <div className="card">
                <div className="svg-wrapper">
                  <CreateProfile />
                </div>
                <div className="works-text">
                  <p>Create a free profile</p>
                  <p>
                    This is an opportunity to showcase who you are. Take your time and make a great
                    impression.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={howItWorksImage} alt="how it works" />
            </div>
          </div>
        </section>
        <section className="full-width-cards">
          <div className="talent-card">
            <div className="text">
              <h3>Talent</h3>
              <p>
                Discover a network of top-notch recruiters and like-minded professionals who share
                your passion for technology and startups.
              </p>
              <Button>Learn more</Button>
            </div>
            <img src={talentCardImageFull} alt="talent card" />
          </div>
          <div className="talent-card">
            <div className="text">
              <h3>Scout</h3>
              <p>
                Discover a network of top-notch recruiters and like-minded professionals who share
                your passion for technology and startups.
              </p>
              <Button>Learn more</Button>
            </div>
            <img src={scoutCardImageFull} alt="talent card" />
          </div>
        </section>

        <ReviewCards />
      </div>
    </>
  );
};

export default HomePage;
