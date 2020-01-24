import React, { Component } from 'react'
import { connect } from 'react-redux';

import AlbumForm from '../components/AlbumForm'
import AlbumIndex from '../components/AlbumIndex'
import {fetchAlbums} from '../actions/fetchAlbums'

class AlbumsContainer extends Component {

  componentDidMount() {
    this.props.fetchAlbums()
  }

  

  render() {
    return (
      <div>
        Albums Contiainer
        <AlbumForm />
        <AlbumIndex albums={this.props.albums}/>
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