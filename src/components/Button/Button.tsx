import React from "react";
import { FC, ReactNode } from "react";
import "./Button.scss";

interface ButtonProps {
  children: ReactNode;
  type?: "INVERTED" | "PRIMARY";
  style?: Object;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, type = "PRIMARY", style, className }) => {
  return (
    <button
      className={`${type === "PRIMARY" ? "btn-primary" : "btn-inverted"} ${
        className ? className : ""
      }`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
