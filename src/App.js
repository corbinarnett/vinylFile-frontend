import React, { Component } from "react";
// import {connect} from 'react-redux'
import AlbumsContainer from "./containers/AlbumsContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <AlbumsContainer />
      </div>
    );
  }
}
