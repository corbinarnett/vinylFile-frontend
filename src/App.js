import React from "react";
// import { connect } from 'react-redux';
// import {fetchAlbums} from './actions/fetchAlbums'
import AlbumsContainer from "./containers/AlbumsContainer";
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <AlbumsContainer />
      </div>
    );
  }
  q;
}

export default App;
