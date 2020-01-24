import React from 'react'

const AlbumIndex = (props) => {
  return (
    <div>
      {props.albums.map(album => <li>{album.name}</li>)}
    </div>
  )
}

// stateless component #1
export default AlbumIndex