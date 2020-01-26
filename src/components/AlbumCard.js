import React from "react";
import { Link } from "react-router-dom";

export default function AlbumCard(props) {
  return (
    <div>
      <h3>Album Card</h3>
      <img src={props.album.image_url} alt={props.album.name} />
      <h4>{props.album.name}</h4>
      <h4>{props.album.artist}</h4>
      <Link to={`/albums/${props.album.id}/reviews`}>Reviews</Link>
    </div>
  );
}
