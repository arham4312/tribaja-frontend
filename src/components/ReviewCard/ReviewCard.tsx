import React from "react";
import { FC } from "react";
import "./ReviewCard.scss";
import { Review } from "../ReviewCards/ReviewCards";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="review-card">
      {review.companyLogo}
      <p>{review.review}</p>
      <div className="review-author">
        <img src={review.authorImage} alt="review author" />
        <div>
          <p>{review.authorName}</p>
          <p>{review.position}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
