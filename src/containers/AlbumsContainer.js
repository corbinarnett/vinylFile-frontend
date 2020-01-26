import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AlbumForm from "../components/AlbumForm";
import Albums from "../components/Albums";
import { fetchAlbums } from "../actions/albumActions";
import Album from "../components/Album";
import Home from "../components/Home"
import { NavBar } from "../components/NavBar";


class AlbumsContainer extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    return (
      <>
      <div>
        <NavBar/>
      </div>
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/albums/new" component={AlbumForm} />
          <Route
            path="/albums/:id/reviews"
            render={routerProps => (
              <Album {...routerProps} albums={this.props.albums} />
            )}
          />
          <Route
            path="/albums"
            render={routerProps => (
              <Albums {...routerProps} albums={this.props.albums} />
            )}
          />
        </Switch>
      </div>
      </>
    );
  }
}

const mapStatetoProps = state => {
  return {
    albums: state.albums,
  };
};

export default connect(mapStatetoProps, { fetchAlbums })(AlbumsContainer);
