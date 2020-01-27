import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function ReviewCard(props) {
  // console.log(props.review);

  return (
    <Container>
      {/* <h4>
        Review By: {props.review.username} - Rating: {props.review.rating}
      </h4>
      <h4>Review: {props.review.content}</h4> */}
      <Card className="text-center" border="info">
        <Card.Body>
          <Card.Title>Rating: {props.review.rating}</Card.Title>
          <Card.Text>
          {props.review.content}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body><br/>
        <Card.Footer className="text-muted">Posted By: {props.review.username}</Card.Footer>
      </Card><br/><br/>
    </Container>
  );
}

export default ReviewCard;
