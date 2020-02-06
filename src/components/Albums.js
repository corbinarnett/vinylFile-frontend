import React from "react";
import AlbumCard from "./AlbumCard";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";

class Albums extends React.Component {
  state = {
    sortedAttribute: "name",
  };

  handleChange = event => {
    this.setState({
      sortedAttribute: event.target.value,
    });
  };

  sortedAlbumsBy = att =>
    [...this.props.albums].sort((a, b) => {
      let albumA = a[att].toUpperCase(); // ignore upper and lowercase
      let albumB = b[att].toUpperCase(); // ignore upper and lowercase
      if (albumA < albumB) {
        return -1;
      }
      if (albumA > albumB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

  renderAlbums = () =>
    this.sortedAlbumsBy(this.state.sortedAttribute).map(album => {
      // debugger
      return (
        <div key={album.id}>
          <AlbumCard album={album} />
        </div>
      );
    });

  render() {
    return (
      <div>
        <Jumbotron className="text-center">
          <h1>Albums</h1>
          <select
            onChange={this.handleChange}
            value={this.state.sortedAttribute}
          >
            <option value="name">Sort by Name</option>
            <option value="artist">Sort by Artist</option>
          </select>
        </Jumbotron>

        <CardDeck className="d-flex justify-content-around">
          {this.renderAlbums()}
        </CardDeck>
      </div>
    );
  }
}

export default Albums;
