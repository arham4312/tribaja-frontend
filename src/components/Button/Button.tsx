import React from "react";
import { FC, ReactNode } from "react";
import "./Button.scss";

interface ButtonProps {
  children: ReactNode;
  type?: "INVERTED" | "PRIMARY";
  style?: Object;
}

const Button: FC<ButtonProps> = ({ children, type = "PRIMARY", style }) => {
  return (
    <button className={type === "PRIMARY" ? "btn-primary" : "btn-inverted"} style={style}>
      {children}
    </button>
  );
};

export default Button;
