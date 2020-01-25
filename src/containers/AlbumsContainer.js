import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Route} from 'react-router-dom'
import AlbumForm from '../components/AlbumForm'
import AlbumIndex from '../components/AlbumIndex'
import {fetchAlbums} from '../actions/fetchAlbums'
import AlbumProfile from '../components/AlbumProfile';

class AlbumsContainer extends Component {

  componentDidMount() {
    // mapDispatchtoProps gives access to this action through props
    this.props.fetchAlbums()
  }

  

  render() {
    return (
      <div>
        <Route path='/albums/new' component={AlbumForm}/>
        <Route path='/albums/:id' render={(routerProps) => <AlbumProfile {...routerProps} albums={this.props.albums}/>}/>
        <Route exact path='/albums' render={(routerProps) => <AlbumIndex {...routerProps} albums={this.props.albums}/>}/>
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