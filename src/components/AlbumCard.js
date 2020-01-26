import React from "react";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function AlbumCard(props) {
  return (
    // <div>
    //   <h3>Album Card</h3>
    //   <img src={props.album.image_url} alt={props.album.name} />
    //   <h4>{props.album.name}</h4>
    //   <h4>{props.album.artist}</h4>
    //   <Link to={`/albums/${props.album.id}/reviews`}>Reviews</Link>
    // </div>

    // <ul className="list-unstyled">
    //   <Media as="li">
    //     <img
    //       width={64}
    //       height={64}
    //       className="mr-3"
    //       src="holder.js/64x64"
    //       alt="Generic placeholder"
    //     />
    //     <Media.Body>
    //       <h5>List-based media object</h5>
    //       <p>
    //         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
    //         scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
    //         in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
    //         nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    //       </p>
    //     </Media.Body>
    //   </Media>
    // </ul>
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
