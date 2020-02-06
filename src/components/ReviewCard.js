import React from "react";
// import {connect} from 'react-redux'
// import {deleteReview} from '../actions/reviewActions'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";

const ReviewCard = props => {
  // album_id is not being passed through props, maybe use a serializer on the backend? belongs_to :album?
  console.log(props);

  return (
    <Container>
      <Card className="text-center" border="info">
        <Card.Body>
          <Card.Title>Rating: {props.review.rating}/10</Card.Title>
          <Card.Text>{props.review.content}</Card.Text>
          {/* <Button onClick={handleDelete}>X</Button> */}
        </Card.Body>
        <br />
        <Card.Footer className="text-muted">
          Posted By: {props.review.username}
        </Card.Footer>
      </Card>
      <br />
      <br />
    </Container>
  );
};

// export default connect(null, {deleteReview})(ReviewCard);
export default ReviewCard;
