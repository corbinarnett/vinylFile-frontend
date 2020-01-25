import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchAlbums} from './actions/albumActions'

import AlbumsContainer from './containers/AlbumsContainer'


class App extends Component {

componentDidMount() {
  this.props.fetchAlbums();
}

  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={AlbumsContainer}/>
          </Switch>
        </Router>
      </div>
    )
  }
}


export default connect(null, { fetchAlbums })(App);

// import React from "react";
// // import { connect } from 'react-redux';
// // import {fetchAlbums} from './actions/fetchAlbums'
// import AlbumsContainer from "./containers/AlbumsContainer";
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <AlbumsContainer />
//       </div>
//     );
//   }
// }

// export default App;
