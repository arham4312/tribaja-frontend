import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import LookingForNewRolesSection from "../../components/LookingForNewRolesSection/LookingForNewRolesSection";
import { ReviewsSection } from "../HomePage/HomePage";

import { ReactComponent as HrSeperator } from "../../assets/images/HrSeperator.svg";
import EventsSection from "../../components/EventsSection/EventsSection";
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection";

const EmployerScreen = () => {
  return (
    <>
      <NavBar />
      <EventsSection />
      <HowItWorksSection />
      <ReviewsSection />
      <LookingForNewRolesSection />
      <Footer />
    </>
  );
};

export default EmployerScreen;
