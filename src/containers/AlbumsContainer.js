import React, { Component } from 'react'
import { connect } from 'react-redux';

import AlbumForm from '../components/AlbumForm'
import AlbumIndex from '../components/AlbumIndex'
import {fetchAlbums} from '../actions/fetchAlbums'

class AlbumsContainer extends Component {

  componentDidMount() {
    // mapDispatchtoProps gives access to this action through props
    this.props.fetchAlbums()
  }

  

  render() {
    return (
      <fieldset>
        <h3>Albums Contiainer</h3>
        <AlbumForm />
        <AlbumIndex albums={this.props.albums}/> 
      </fieldset>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStatetoProps, {fetchAlbums})(AlbumsContainer)