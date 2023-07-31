import React, { FC } from "react";
import Button from "../../components/Button/Button";
import purpleHeroSpirals from "../../assets/images/purpleHeroSpirals.png";
import emploerScreenHeroPerson from "../../assets/images/emploerScreenHeroPerson.png";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import LookingForNewRolesSection from "../../components/LookingForNewRolesSection/LookingForNewRolesSection";
import { ReviewsSection } from "../HomePage/HomePage";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";
import CompaniesLogos from "../../components/CompaniesLogos/CompaniesLogos";
import { BenefitsOfHiringFromUs } from "../../components/BenefitsOfHiringFromUs/BenefitsOfHiringFromUs";
import { ReactComponent as HrSeperator } from "../../assets/images/HrSeperator.svg";
import "./EmployerPostJobScreen.scss";

import findRightTalent from "../../assets/images/findRightTalent.png";

const EmployerPostJobScreen: FC = () => {
  return (
    <>
      <NavBar />
      <div className="post-job-screen">
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
        <section className="connect-with-talent-section">
          <h2>Connect with qualified tech talent</h2>
          <HrSeperator />
          <div className="connect-section-flex">
            <div>
              <div className="percentage">
                <span>
                  97%
                  <div className="svg-wrapper">
                    <PeachCircle />
                  </div>
                </span>
              </div>
              <div className="text">
                <p className="text-title">Black & Latinx</p>
                <p className="text-description">
                  Our community is prodominently Black and Latinx career changers. These groups are
                  the most underrepresented in tech and we aim to change that.
                </p>
              </div>
            </div>
            <div>
              <div className="percentage">
                <span>
                  97%
                  <div className="svg-wrapper">
                    <PeachCircle />
                  </div>
                </span>
              </div>
              <div className="text">
                <p className="text-title">Black & Latinx</p>
                <p className="text-description">
                  Our community is prodominently Black and Latinx career changers. These groups are
                  the most underrepresented in tech and we aim to change that.
                </p>
              </div>
            </div>
            <div>
              <div className="percentage">
                <span>
                  97%
                  <div className="svg-wrapper">
                    <PeachCircle />
                  </div>
                </span>
              </div>
              <div className="text">
                <p className="text-title">Black & Latinx</p>
                <p className="text-description">
                  Our community is prodominently Black and Latinx career changers. These groups are
                  the most underrepresented in tech and we aim to change that.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-find-talent-section">
          <h2>How we find the right talent</h2>
          <HrSeperator />
          <div className="talent-flex">
            <div className="process-grid">
              <div className="process-step">
                <div className="svg-wrapper">
                  <PersonIcon />
                </div>
                <p className="title">Sourcing</p>
                <p className="description">
                  We identify candidates through strong referral networks and our own rigorous
                  assessment.
                </p>
              </div>
              <div className="process-step">
                <div className="svg-wrapper">
                  <PersonIcon />
                </div>
                <p className="title">Sourcing</p>
                <p className="description">
                  We identify candidates through strong referral networks and our own rigorous
                  assessment.
                </p>
              </div>
              <div className="process-step">
                <div className="svg-wrapper">
                  <PersonIcon />
                </div>
                <p className="title">Sourcing</p>
                <p className="description">
                  We identify candidates through strong referral networks and our own rigorous
                  assessment.
                </p>
              </div>
              <div className="process-step">
                <div className="svg-wrapper">
                  <PersonIcon />
                </div>
                <p className="title">Sourcing</p>
                <p className="description">
                  We identify candidates through strong referral networks and our own rigorous
                  assessment.
                </p>
              </div>
            </div>
            <div className="talent-image">
              <img src={findRightTalent} />
            </div>
          </div>
        </section>
        <section className="pricing-section">
          <h2>Pricing that fits every stage</h2>
          <HrSeperator />
          <div className="pricing-cards">
            <div className="pricing-card">
              <div>
                <div className="svg-wrapper">
                  <Zap />
                </div>
                <p className="title">Basic plan</p>
                <p className="price">
                  <span>$259 </span>
                  <span>/mo</span>
                </p>
                <p className="for-anyone-text">For anyone to get started</p>
                <div className="benefits">
                  <div className="benefit">
                    <TickSVG />
                    <p>Employer Profile</p>
                  </div>
                  <div className="benefit">
                    <TickSVG />
                    <p>1 newsletter post</p>
                  </div>
                </div>
              </div>
              <Button type="INVERTED">Get Started</Button>
            </div>
            <div className="pricing-card">
              <div>
                <div className="svg-wrapper">
                  <Zap />
                </div>
                <p className="title">Basic plan</p>
                <p className="price">
                  <span>$259 </span>
                  <span>/mo</span>
                </p>
                <p className="for-anyone-text">For anyone to get started</p>
                <div className="benefits">
                  <div className="benefit">
                    <TickSVG />
                    <p>Employer Profile</p>
                  </div>
                  <div className="benefit">
                    <TickSVG />
                    <p>1 newsletter post</p>
                  </div>
                </div>
              </div>
              <Button type="INVERTED">Get Started</Button>
            </div>
            <div className="pricing-card">
              <div>
                <div className="svg-wrapper">
                  <Zap />
                </div>
                <p className="title">Basic plan</p>
                <p className="price">
                  <span>$259 </span>
                  <span>/mo</span>
                </p>
                <p className="for-anyone-text">For anyone to get started</p>
                <div className="benefits">
                  <div className="benefit">
                    <TickSVG />
                    <p>Employer Profile</p>
                  </div>
                  <div className="benefit">
                    <TickSVG />
                    <p>1 newsletter post</p>
                  </div>
                </div>
              </div>
              <Button>Get Started</Button>
            </div>
            <div className="pricing-card">
              <div>
                <div className="svg-wrapper">
                  <Zap />
                </div>
                <p className="title">Basic plan</p>
                <p className="price">
                  <span>$259 </span>
                  <span>/mo</span>
                </p>
                <p className="for-anyone-text">For anyone to get started</p>
                <div className="benefits">
                  <div className="benefit">
                    <TickSVG />
                    <p>Employer Profile</p>
                  </div>
                  <div className="benefit">
                    <TickSVG />
                    <p>1 newsletter post</p>
                  </div>
                </div>
              </div>
              <Button type="INVERTED">Get Started</Button>
            </div>
          </div>
        </section>
        <BenefitsOfHiringFromUs />
        <HowItWorksSection />
        <ReviewsSection />
        <LookingForNewRolesSection />
      </div>
      <Footer />
    </>
  );
};

export default EmployerPostJobScreen;

const PeachCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="40" fill="#FDCEB5" />
  </svg>
);

const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path
      d="M17.248 3C13.1192 3 9.74805 6.37119 9.74805 10.5C9.74805 14.6288 13.1192 18 17.248 18C21.3769 18 24.748 14.6288 24.748 10.5C24.748 6.37119 21.3769 3 17.248 3ZM17.248 5.25C20.1609 5.25 22.498 7.58718 22.498 10.5C22.498 13.4128 20.1609 15.75 17.248 15.75C14.3352 15.75 11.998 13.4128 11.998 10.5C11.998 7.58718 14.3352 5.25 17.248 5.25ZM24.1006 17.4814C23.9601 17.4626 23.8148 17.4833 23.6816 17.5444C23.4221 17.6667 23.2495 17.9332 23.2495 18.2212V30.9727C23.2495 31.2899 23.4498 31.5692 23.7461 31.6772C24.0408 31.7845 24.3742 31.6998 24.5752 31.4546L26.8062 28.7754L29.0225 33.6548C29.351 34.3763 30.1986 34.698 30.9224 34.374L31.6343 34.0547C32.3633 33.7284 32.6864 32.872 32.3564 32.146L30.1182 27.3003H33.748C34.0653 27.3003 34.3461 27.026 34.4541 26.7305C34.5621 26.435 34.4751 26.1038 34.2373 25.9028L24.4873 17.6514C24.3759 17.5576 24.241 17.5003 24.1006 17.4814ZM8.2334 21C6.5879 21 5.24805 22.3384 5.24805 23.9839V25.125C5.24805 27.609 6.66299 29.7559 9.22949 31.1719C11.3655 32.3509 14.212 33 17.248 33C18.751 33 20.283 32.8293 21.729 32.4873V30.167C20.3355 30.5525 18.7885 30.75 17.248 30.75C12.403 30.75 7.49805 28.818 7.49805 25.125V23.9839C7.49805 23.5789 7.8284 23.25 8.2334 23.25H21.729V21H8.2334Z"
      fill="#1E1E2F"
    />
  </svg>
);

const Zap = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.8333 1.66675L2.5 11.6667H10L9.16667 18.3334L17.5 8.33342H10L10.8333 1.66675Z"
      stroke="#5937CC"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const TickSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#FAF9FF" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.096 7.39016L9.93602 14.3002L8.03602 12.2702C7.68602 11.9402 7.13602 11.9202 6.73602 12.2002C6.34602 12.4902 6.23602 13.0002 6.47602 13.4102L8.72602 17.0702C8.94602 17.4102 9.32601 17.6202 9.75601 17.6202C10.166 17.6202 10.556 17.4102 10.776 17.0702C11.136 16.6002 18.006 8.41016 18.006 8.41016C18.906 7.49016 17.816 6.68016 17.096 7.38016V7.39016Z"
      fill="#5937CC"
    />
  </svg>
);
