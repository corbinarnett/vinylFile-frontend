import React from "react";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function AlbumCard(props) {
  return (
    // <div>
    //   <h3>Album Card</h3>
    //   <img src={props.album.image_url} alt={props.album.name} />
    //   <h4>{props.album.name}</h4>
    //   <h4>{props.album.artist}</h4>
    //   <Link to={`/albums/${props.album.id}/reviews`}>Reviews</Link>
    // </div>
    <Card>
      <Card.Img variant="top" src={props.album.image_url} />
      <Card.Body>
        <Card.Title>{props.album.name}</Card.Title>
        <Card.Subtitle>{props.album.artist}</Card.Subtitle>
        <br />
        <Button href={`/albums/${props.album.id}/reviews`} variant="primary">
          Reviews
        </Button>
      </Card.Body>
    </Card>
  );
}
