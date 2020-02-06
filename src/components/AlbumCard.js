import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function AlbumCard(props) {
  return (
    <Card border="light" className="text-center">
      <Card.Img variant="top" src={props.album.image_url} />
      <Card.Body>
        <Card.Title>{props.album.name}</Card.Title>
        <Card.Subtitle>{props.album.artist}</Card.Subtitle>
        <br />
        <Link
          className="btn btn-primary"
          to={`/albums/${props.album.id}/reviews`}
        >
          Reviews
        </Link>
      </Card.Body>
    </Card>
  );
}
