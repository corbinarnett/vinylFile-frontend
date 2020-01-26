
import React from 'react'
import AlbumCard from './AlbumCard'

const Albums = (props) => {

  return (
    <div>
      {props.albums.map(album =>
        <div key={album.id}>
          <AlbumCard album={album}/>
        </div> )}
    </div>

  )
}

export default Albums
