import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
import HomePage from "./containers/HomePage/HomePage";
import TalentScreen from "./containers/HomePage/TalentScreen/TalentScreen";
import EmployerHireScreen from "./containers/EmployerHireScreen/EmployerHireScreen";
import EmployerPostJobScreen from "./containers/EmployerPostJobScreen/EmployerPostJobScreen";
import PartnerScreen from "./containers/PartnerScreen/PartnerScreen";
import SignUpScreen1 from "./containers/SignUpScreen1/SignUpScreen1";
import SignUpScreen2 from "./containers/SignUpScreen2/SignUpScreen2";
import SignUpScreenOTP from "./containers/SignUpScreenOTP/SignUpScreenOTP";
import VerifyEmailScreen from "./containers/VerifyEmailScreen/VerifyEmailScreen";
import LoginScreen from "./containers/LoginScreen/LoginScreen";
import ForgotPasswordScreen from "./containers/ForgotPasswordScreen/ForgotPasswordScreen";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/talent" element={<TalentScreen />} />
        <Route path="/employer/hire-from-us" element={<EmployerHireScreen />} />
        <Route path="/employer/post-job" element={<EmployerPostJobScreen />} />
        <Route path="/partner" element={<PartnerScreen />} />
        <Route path="/sign-up" element={<SignUpScreen1 />} />
        <Route path="/sign-up-2" element={<SignUpScreen2 />} />
        <Route path="/sign-up-otp" element={<SignUpScreenOTP />} />
        <Route path="/verify-email" element={<VerifyEmailScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
      </Routes>
    </div>
  );
};

export default App;
