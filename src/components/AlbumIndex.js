import React from 'react'
import AlbumCard from './AlbumIndexCard'

function AlbumIndex(props) {
  let albumCards =  props.albums.map(album => {
    return (
      <fieldset key={album.id}>
        <div>
          <AlbumCard album={album} />
        </div>
      </fieldset>
    )
  })
  return (
    <div>
      {albumCards}
    </div>
  )
}


// stateless component #1
export default AlbumIndex


