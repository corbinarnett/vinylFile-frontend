import React from "react";
// import ReviewForm from '../components/ReviewForm'
import Reviews from "../components/Reviews";
import ReviewForm from "../components/ReviewForm";

function ReviewsContainer(props) {
  return (
    <div>
      <ReviewForm album={props.album} />
      <br />
      <Reviews reviews={props.album && props.album.reviews} />
    </div>
  );
}

export default ReviewsContainer;
