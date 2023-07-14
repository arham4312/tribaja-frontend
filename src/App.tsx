import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.scss";
import HomePage from "./containers/HomePage/HomePage";
import TalentScreen from "./containers/HomePage/TalentScreen/TalentScreen";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/talent" element={<TalentScreen />} />
      </Routes>
    </div>
  );
};

export default App;
