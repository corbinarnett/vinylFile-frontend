import React from 'react'

function AlbumProfile(props) {

  let album = props.albums[props.match.params.id - 1]
  console.log(album)
  return (
    <div>
      {album ? album.name : null}
    </div>
  )
}

export default AlbumProfile