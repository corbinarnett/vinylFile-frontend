import React from "react";
import ReviewCard from "./ReviewCard";

function Reviews(props) {
  // console.log(props.reviews)
  return (
    <div>
      {props.reviews &&
        props.reviews.map(review => (
          <div key={review.id}>
            <ReviewCard review={review} />
          </div>
        ))}
    </div>
  );
}

export default Reviews;
