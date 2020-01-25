import React from 'react'
import ProfileContainer from '../containers/ProfileContainer'
// import {Redirect} from 'react-router-dom'

function AlbumProfile(props) {

  let album = props.albums[props.match.params.id - 1]
  // console.log(album)
  return (
    <div>
      <ProfileContainer album={album}/>
      {album ? album.name : null} 
    </div>
  )
}

export default AlbumProfile

// currently this is being sent props from the AlbumsContainer