import React, { Component } from 'react'
import AlbumForm from '../components/AlbumForm'
import AlbumIndex from '../components/AlbumIndex'

export default class AlbumsContainer extends Component {
  render() {
    return (
      <div>
        Albums Contiainer
        <AlbumForm />
        <AlbumIndex />
      </div>
    )
  }
}

