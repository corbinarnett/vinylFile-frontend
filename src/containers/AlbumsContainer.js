import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import AlbumForm from '../components/AlbumForm'
import Albums from '../components/Albums'
import {fetchAlbums} from '../actions/albumActions'
import Album from '../components/Album'
// import ProfileContainer from './ReviewsContainer';

class AlbumsContainer extends Component {

  componentDidMount() {
    // mapDispatchtoProps gives access to this action through props
    this.props.fetchAlbums()
  }

  

  render() {
    return ( 
      <div>
      <Switch>
        <Route path='/albums/new' component={AlbumForm}/>
        <Route path='/albums/:id' render={(routerProps) => <Album {...routerProps} albums={this.props.albums}/>}/>
        <Route path='/albums' render={(routerProps) => <Albums {...routerProps} albums={this.props.albums}/>}/>
      </Switch>
        
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    albums: state.albums
  }
    
  
}

export default connect(mapStatetoProps, {fetchAlbums})(AlbumsContainer)