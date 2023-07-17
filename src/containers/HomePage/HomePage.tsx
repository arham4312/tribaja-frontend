import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import NavBar from "../../components/NavBar/NavBar";
import ReviewCards from "../../components/ReviewCards/ReviewCards";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import LookingForNewRolesSection from "../../components/LookingForNewRolesSection/LookingForNewRolesSection";
import HowWeHelpTalentSection from "../../components/HowWeHelpTalentSection/HowWeHelpTalentSection";
import circles from "../../assets/images/5circles.png";
import "./HomePage.scss";

import { ReactComponent as HrSeperator } from "../../assets/images/HrSeperator.svg";
// TalentCardSection
import talentCardImage from "../../assets/images/TalentCardImage.png";
import employersCardImage from "../../assets/images/EmployersCardImage.png";
import scountCardImage from "../../assets/images/ScountCardImage.png";
import tradingPartnerCardImage from "../../assets/images/TradingPartnerCardImage.png";
import talentCardImageFull from "../../assets/images/talentCardImageFull.png";
import scoutCardImageFull from "../../assets/images/scoutCardImageFull.png";
import purpleCardBackgroun from "../../assets/images/purpleCardBackgroun.png";
import peachCardBackground from "../../assets/images/peachCardBackground.png";
import { ReactComponent as GoogleLogo } from "../../assets/icons/googleLogo.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/icons/youtubeLogo.svg";
import { ReactComponent as MicrosoftLogo } from "../../assets/icons/microSoftLogo.svg";
import { ReactComponent as AmazonLogo } from "../../assets/icons/amazonLogo.svg";
import { ReactComponent as AdobeLogo } from "../../assets/icons/adobeLogo.svg";
import { ReactComponent as SpotifyLogo } from "../../assets/icons/spotifyLogo.svg";
import { ReactComponent as UberLogo } from "../../assets/icons/uberLogo.svg";
// CommunityImpactSection
import communityImpactImage from "../../assets/images/communityImpactImage.png";
import { ReactComponent as SymbolHeartInHand } from "../../assets/images/SymbolHeartInHand.svg";
// HowItWorksSection
import { ReactComponent as CreateProfile } from "../../assets/images/CreateProfile.svg";
import { ReactComponent as DownArrow1pxgrey } from "../../assets/images/DownArrow1pxgrey.svg";
import howItWorksImage from "../../assets/images/howItWorksImage.png";
// CEOMessageSection
import ceoMessage from "../../assets/images/ceoMessage.png";
// import employerCardImage from "../../assets/images/employerCardImage.png";
// import employerCardBackground from "../../assets/images/employerCardBackground.png";
// import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const HomePage: FC = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${circles})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
        className="homepage"
      >
        <HeroSection />
        <CommunityImpactSection />
        <HowItWorksSection />
        <HowWeHelpTalentSection />
        <TalentCardSection />
        <CEOMessageSection />
        <ReviewsSection />
        <LookingForNewRolesSection />
        {/* <HowWeHelpTalentSection /> */}
      </div>
      <div style={{ marginTop: "118px" }}></div>
      <Footer />
    </>
  );
};

export default HomePage;
const HeroSection: FC = () => {
  const linearGradient = "linear-gradient(180deg, rgba(65, 65, 65, 0) 58.33%, #111 100%)";

  return (
    <section className="hero-section">
      <h1 className="hero-text">Your trusted career guide for life's career changes</h1>
      <p className="hero-subtext">Your trusted career guide for life's career changes</p>
      <Button style={{ display: "block", margin: "auto", marginBottom: "40px" }}>
        Let's Start
      </Button>
      <div className="homepage__cards">
        {/* Talent Card */}
        <div style={{ backgroundImage: `${linearGradient},url(${talentCardImage})` }}>
          <p>Talent</p>
          <Link to="/talent">
            Join Now
            <FiArrowUpRight />
          </Link>
        </div>
        {/* Employers Card */}
        <div style={{ backgroundImage: `${linearGradient},url(${employersCardImage})` }}>
          <p>Employers</p>
          <Link to="/talent">
            Join Now <FiArrowUpRight />
          </Link>
        </div>
        {/* Scout Card */}
        <div style={{ backgroundImage: `${linearGradient},url(${scountCardImage})` }}>
          <p>Scout</p>
          <Link to="/talent">
            Join Now <FiArrowUpRight />
          </Link>
        </div>
        {/* Training Partner Card */}
        <div style={{ backgroundImage: `${linearGradient},url(${tradingPartnerCardImage})` }}>
          <p>Training Partner</p>
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
  );
};

const CommunityImpactSection: FC = () => {
  return (
    <section className="community-impact-section">
      <h2>Our Community Impact</h2>
      <HrSeperator />
      <p className="top-para">
        We are so excited and proud of our product. It's really easy to create a landing page for
        your awesome product.
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
  );
};

const HowItWorksSection: FC = () => {
  return (
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
  );
};

const TalentCardSection: FC = () => {
  return (
    <section className="full-width-cards">
      <div className="talent-card peach">
        <div className="text">
          <h3>Talent</h3>
          <p>
            Discover a network of top-notch recruiters and like-minded professionals who share your
            passion for technology and startups.
          </p>
          <Button>Learn more</Button>
        </div>
        <div style={{ background: `url(${peachCardBackground})`, backgroundSize: "cover" }}>
          <img src={talentCardImageFull} alt="talent card" style={{ maxWidth: "unset" }} />
        </div>
      </div>
      <div className="talent-card purple">
        <div style={{ background: `url(${purpleCardBackgroun})`, backgroundSize: "cover" }}>
          <img src={talentCardImageFull} alt="talent card" style={{ maxWidth: "unset" }} />
        </div>
        <div className="text">
          <h3>Talent</h3>
          <p>
            Discover a network of top-notch recruiters and like-minded professionals who share your
            passion for technology and startups.
          </p>
          <Button>Learn more</Button>
        </div>
      </div>
      <div className="talent-card peach">
        <div className="text">
          <h3>Scout</h3>
          <p>
            Discover a network of top-notch recruiters and like-minded professionals who share your
            passion for technology and startups.
          </p>
          <Button>Learn more</Button>
        </div>
        <div style={{ background: `url(${peachCardBackground})`, backgroundSize: "cover" }}>
          <img src={scoutCardImageFull} alt="talent card" style={{ maxWidth: "unset" }} />
        </div>
      </div>
    </section>
  );
};

const CEOMessageSection: FC = () => {
  return (
    <section className="ceo-message-section">
      <h2>CEO Message</h2>
      <HrSeperator />
      <div>
        <img src={ceoMessage} alt="ceo message" />

        <div className="ceo-message-right">
          <p className="ceo-message-text">
            ”As an Afro-Latina and single mother, I struggled to make ends meet. I had a obtained my
            bachelor's degree and worked a corporate job but it wasn’t enough. I faced barriers and
            bias trying to climb the ladder and so I set out to make a career change. Transitioning
            into the tech industry changed my life and now I help others to do the same.”
          </p>
          <div className="salary-comparison">
            <div>
              <p>$67k</p>
              <p>Non-tech salary</p>
            </div>
            <div>
              <p>$67k</p>
              <p>Non-tech salary</p>
            </div>
          </div>
          <Button>Get started for free</Button>
        </div>
      </div>
    </section>
  );
};

const ReviewsSection: FC = () => {
  return (
    <section className="reviews-section">
      <h2>Reviews</h2>
      <HrSeperator />
      <p className="top-para">
        Join 11,400+ members that are already on their journey to a career in tech.
      </p>
      <ReviewCards />
    </section>
  );
};

export { ReviewsSection };
