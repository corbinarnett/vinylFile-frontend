import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AlbumForm from "../components/AlbumForm";
import Albums from "../components/Albums";
import { fetchAlbums } from "../actions/albumActions";
import Album from "../components/Album";
import Home from "../components/Home";
import { NavBar } from "../components/NavBar";
import Error from "../components/Error";

class AlbumsContainer extends Component {
  /*
componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. 
If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  */
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    return (
      <>
        <div>
          <NavBar />
        </div>
        <div>
          {/* Switch ensures that only one component is redered at a time */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/albums/new" component={AlbumForm} />
            <Route
              path="/albums/:id/reviews"
              render={routerProps => (
                <Album {...routerProps} albums={this.props.albums} />
              )}
            />
            <Route
              path="/albums"
              render={() => <Albums albums={this.props.albums} />}
            />
            <Route component={Error} />
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

export default connect(mapStatetoProps, { fetchAlbums })(AlbumsContainer); //The connect() function connects a React component to a Redux store.
