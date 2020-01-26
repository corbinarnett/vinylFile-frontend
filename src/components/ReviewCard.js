import React from "react";

function ReviewCard(props) {
  // console.log(props.review);

  return (
    <fieldset>
      <h4>
        Review By: {props.review.username} - Rating: {props.review.rating}
      </h4>
      <h4>Review: {props.review.content}</h4>
    </fieldset>
  );
}

export default ReviewCard;
