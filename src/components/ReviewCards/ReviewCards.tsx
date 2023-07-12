import React, { FC } from "react";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { ReactComponent as SpotifyLogo } from "../../assets/icons/spotifyLogo.svg";
import { ReactComponent as GoogleLogo } from "../../assets/icons/googleLogo.svg";
import { ReactComponent as MicrosoftLogo } from "../../assets/icons/microSoftLogo.svg";
// import { ReactComponent as AdamSmithReview } from "../../assets/images/adamSmithReview.svg";
// import { ReactComponent as LynelleChainReview } from "../../assets/images/lynelleChanReview.svg";
// import { ReactComponent as TaniaAparicioReview } from "../../assets/images/taniaAparicioReview.svg";

import AdamSmithReview from "../../assets/images/AdamSmithReview.png";
import LynelleChainReview from "../../assets/images/LynelleChanReview.png";
import TaniaAparicioReview from "../../assets/images/TaniaAparicioReview.png";

import "./ReviewCards.scss";

export interface Review {
  companyLogo: JSX.Element;
  review: string;
  authorImage: string;
  authorName: string;
  position: string;
}
const reviewData: Array<Review> = [
  {
    companyLogo: <SpotifyLogo />,
    review:
      '"Thank you Tribaja for connecting me with Spotify — I was hired as a Senior Designer and so far it’s been an amazing experience!"',
    authorImage: AdamSmithReview,
    authorName: "Adam Smith",
    position: "Web Designer at Spotify",
  },
  {
    companyLogo: <GoogleLogo />,
    review:
      "Great News, I got hired at google. I found the opportunity in Tribaja and then I reached out to Shannon and she shared a direct link to the hiring manager. I really appreciate your support. Thank you!!.",
    authorImage: LynelleChainReview,
    authorName: "Lynelle Chan",
    position: "Product Associate at Google",
  },
  {
    companyLogo: <MicrosoftLogo />,
    review:
      '"Thank you Tribaja for connecting me with Spotify — I was hired as a Senior Designer and so far it’s been an amazing experience!"',
    authorImage: TaniaAparicioReview,
    authorName: "Tania Aparicio",
    position: "BDM at Microsoft",
  },
];

const ReviewCards: FC = () => {
  return (
    <>
      <div className="review-cards">
        {reviewData.map((review, index) => (
          <ReviewCard key={index.toString()} review={review} />
        ))}
      </div>
    </>
  );
};

export default ReviewCards;
