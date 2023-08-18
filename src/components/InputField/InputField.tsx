import React, { ReactNode, CSSProperties } from "react";
import "./InputField.scss";

type Props = {
  label: string;
  children: ReactNode;
  style?: CSSProperties;
};

function InputField({ label, children, style }: Props) {
  return (
    <div className="custom-input" style={style}>
      <label>
        <div className="label-text">{label}</div>

        {children}
      </label>
    </div>
  );
}

export default InputField;
