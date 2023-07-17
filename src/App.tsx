import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
import HomePage from "./containers/HomePage/HomePage";
import TalentScreen from "./containers/HomePage/TalentScreen/TalentScreen";
import EmployerScreen from "./containers/EmployerScreen/EmployerScreen";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/talent" element={<TalentScreen />} />
        <Route path="/employer" element={<EmployerScreen />} />
      </Routes>
    </div>
  );
};

export default App;
