import React from "react";
import { FC, ReactNode, CSSProperties } from "react";
import "./Button.scss";

interface ButtonProps {
  children: ReactNode;
  type?: "INVERTED" | "PRIMARY";
  style?: CSSProperties;
  className?: string;
  backgoundColor?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  type = "PRIMARY",
  style,
  className,
  backgoundColor,
}) => {
  const updatedStyle: CSSProperties = { ...style };

  if (backgoundColor) {
    updatedStyle.backgroundColor = backgoundColor;
  }
  return (
    <button
      className={`${type === "PRIMARY" ? "btn-primary" : "btn-inverted"} ${
        className ? className : ""
      }`}
      style={updatedStyle}
    >
      {children}
    </button>
  );
};

export default Button;

export const LoginWithGoogleButton = (props: any) => {
  return (
    <Button
      style={{
        background: "#4285F4",
        display: "flex",
        gap: "14px",
        alignItems: "center",
        color: "var(--lt-grey, #F2F4F7)",
        fontFamily: "Space Grotesk",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        border: "0px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          borderRadius: "8px",
          background: "#FFF",
          padding: "4px",
          width: "32px",
          height: "32px",
          display: "fex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GoogleGLogo />
      </div>
      <p>Continue with google</p>
    </Button>
  );
};

export const LoginWithLinkedInButton = (props: any) => {
  return (
    <Button
      style={{
        background: "#4285F4",
        display: "flex",
        gap: "14px",
        alignItems: "center",
        color: "var(--lt-grey, #F2F4F7)",
        fontFamily: "Space Grotesk",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        border: "0px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          borderRadius: "8px",
          background: "#FFF",
          padding: "4px",
          width: "32px",
          height: "32px",
          display: "fex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LinkedInLogo />
      </div>
      <p>Continue with LinkeIn</p>
    </Button>
  );
};

// prettier-ignore
const GoogleGLogo = () => (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0005 12.2332C23.0005 11.3699 22.9291 10.7399 22.7744 10.0865H12.7148V13.9832H18.6196C18.5006 14.9515 17.8577 16.4099 16.4291 17.3898L16.4091 17.5203L19.5897 19.935L19.8101 19.9565C21.8338 18.1249 23.0005 15.4298 23.0005 12.2332Z" fill="#4285F4"/><path d="M12.714 22.5C15.6068 22.5 18.0353 21.5666 19.8092 19.9567L16.4282 17.3899C15.5235 18.0083 14.3092 18.4399 12.714 18.4399C9.88069 18.4399 7.47596 16.6083 6.61874 14.0766L6.49309 14.0871L3.18583 16.5954L3.14258 16.7132C4.90446 20.1433 8.5235 22.5 12.714 22.5Z" fill="#34A853"/><path d="M6.62095 14.0767C6.39476 13.4234 6.26386 12.7233 6.26386 12C6.26386 11.2767 6.39476 10.5767 6.60905 9.92337L6.60306 9.78423L3.25435 7.2356L3.14478 7.28667C2.41862 8.71002 2.00195 10.3084 2.00195 12C2.00195 13.6917 2.41862 15.29 3.14478 16.7133L6.62095 14.0767Z" fill="#FBBC05"/><path d="M12.7141 5.55997C14.7259 5.55997 16.083 6.41163 16.8569 7.12335L19.8807 4.23C18.0236 2.53834 15.6069 1.5 12.7141 1.5C8.52353 1.5 4.90447 3.85665 3.14258 7.28662L6.60686 9.92332C7.47598 7.39166 9.88073 5.55997 12.7141 5.55997Z" fill="#EB4335"/></svg>);

// prettier-ignore
const LinkedInLogo = () => (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 18.5C21.5 19.881 20.381 21 19 21H6C4.6195 21 3.5 19.881 3.5 18.5V5.5C3.5 4.119 4.6195 3 6 3H19C20.381 3 21.5 4.119 21.5 5.5V18.5Z" fill="#0288D1"/><path d="M6.5 9.5H9V18H6.5V9.5ZM7.7425 8.5H7.7285C6.9825 8.5 6.5 7.944 6.5 7.2495C6.5 6.54 6.9975 6 7.757 6C8.5175 6 8.986 6.54 9 7.2495C9 7.9435 8.5175 8.5 7.7425 8.5ZM18.5 18H16V13.4505C16 12.3515 15.3875 11.6015 14.404 11.6015C13.6535 11.6015 13.2475 12.1075 13.0505 12.5965C12.9785 12.7715 13 13.2555 13 13.5V18H10.5V9.5H13V10.808C13.3605 10.25 13.925 9.5 15.369 9.5C17.158 9.5 18.4995 10.625 18.4995 13.137L18.5 18Z" fill="white"/></svg>);
