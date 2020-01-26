import React from "react";
import AlbumCard from "./AlbumCard";
import CardDeck from "react-bootstrap/CardDeck";

const Albums = props => {
  let albums = props.albums.map(album => {
    return (
      <div key={album.id}>
        <AlbumCard album={album} />
      </div>
    );
  });
  return (
    <div>
      {/* {props.albums.map(album => (

        <div key={album.id}>
          <AlbumCard album={album} />
        </div>

      ))} */}

      <CardDeck className="d-flex justify-content-around">{albums}</CardDeck>
    </div>
  );
};

export default Albums;
