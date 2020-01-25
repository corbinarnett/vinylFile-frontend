import React from 'react'

const AlbumProfile = (props) => {

  function profileCard(props) {
    if (props.album) {
      return (
        <div key={props.album.id}>
          <h3>Album Profile</h3>
          <img src={props.album.image_url} alt={props.album.name}/>
          <h4>{props.album.name}</h4>
          <h4>{props.album.artist}</h4>
        </div>
      )
    }
  }
  

  return (
  
      <div>
        {profileCard(props)}
      </div>
      
    )
}

export default AlbumProfile

// this is being sent props from the ProfileContainer