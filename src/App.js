import React from "react";
import { connect } from 'react-redux';
import {fetchAlbums} from './actions/fetchAlbums'

class App extends React.Component {


  componentDidMount() {
    this.props.fetchAlbums({type: 'FETCH_ALBUMS', payload: {name: 'Blue Moon'}})
  }


  render() {
    return ( 
    <div className="App">
      App
    </div>
    );
  }q
}



export default connect(null, {fetchAlbums})(App);
