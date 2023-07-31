import React, { FC } from "react";

import { ReactComponent as GoogleLogo } from "../../assets/icons/googleLogo.svg";
import { ReactComponent as YoutubeLogo } from "../../assets/icons/youtubeLogo.svg";
import { ReactComponent as MicrosoftLogo } from "../../assets/icons/microSoftLogo.svg";
import { ReactComponent as AmazonLogo } from "../../assets/icons/amazonLogo.svg";
import { ReactComponent as AdobeLogo } from "../../assets/icons/adobeLogo.svg";
import { ReactComponent as SpotifyLogo } from "../../assets/icons/spotifyLogo.svg";
import { ReactComponent as UberLogo } from "../../assets/icons/uberLogo.svg";

const CompaniesLogos: FC = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <GoogleLogo />
      <YoutubeLogo />
      <MicrosoftLogo />
      <AmazonLogo />
      <AdobeLogo />
      <SpotifyLogo />
      <UberLogo />
    </div>
  );
};

export default CompaniesLogos;
