import React from "react";
import "./OrSeperator.scss";
import exp from "constants";

type Props = {};

const OrSeperator = (props: Props) => {
  return (
    <div className="seperator">
      <Seperator />
      <p>OR</p>
      <Seperator />
    </div>
  );
};

export default OrSeperator;
const Seperator = () => (
  <svg width="167" height="2" viewBox="0 0 167 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" width="166.5" height="2" fill="#999999" />
  </svg>
);
