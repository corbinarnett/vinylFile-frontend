import React from "react";
import ReviewsContainer from "../containers/ReviewsContainer";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Album = props => {
  let album = props.albums.filter(
    // eslint-disable-next-line
    album => album.id == props.match.params.id
  )[0];

  return (
    <div>
      {album && (
        
          <Card bg="info" text="white">
            <Card.Body>
              <Card.Title>{album.name}</Card.Title>
              <Card.Subtitle>{album.artist}</Card.Subtitle>
              <Card.Text>
                Recording Label: {album.label} - {album.release_date}
              </Card.Text>
            </Card.Body>
          </Card>
        
      )}
      <br />
      <ReviewsContainer album={album} />
    </div>
  );
};

export default Album;
