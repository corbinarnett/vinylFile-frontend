import React from 'react'

const AlbumCard = (props) => {

  console.log(props.album)
  return (
    <div>
    <h3>Album Card</h3>
      <img src={props.album.image_url} alt={props.album.name}/>
      <h4>{props.album.name}</h4>
      <h4>{props.album.artist}</h4>
      <h4>{props.album.label}</h4>
      <h4>{props.album.release_date}</h4>
      <h6>Link to Reviews</h6>
    </div>
  )
}

export default AlbumCard

// stateless component #2