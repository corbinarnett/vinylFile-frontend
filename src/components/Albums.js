import React from "react";
import AlbumCard from "./AlbumCard";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";


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
    <Jumbotron fluid className="text-center">
        <h1>Albums</h1>
      </Jumbotron>
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
