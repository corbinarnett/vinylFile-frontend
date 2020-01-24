import React from "react";
// import { connect } from 'react-redux';
// import {fetchAlbums} from './actions/fetchAlbums'
import AlbumsContainer from "./containers/AlbumsContainer";
class App extends React.Component {
  // componentDidMount() {
  //   this.props.fetchAlbums({type: 'FETCH_ALBUMS', payload: {name: 'Blue Moon'}})
  // }

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
