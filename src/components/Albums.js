
import React from 'react'
import {Link} from 'react-router-dom'

const Albums = (props) => {

  return (
    <div>
      {props.albums.map(album =>
        <li key={album.id}>
          <Link to={`/albums/${album.id}`}>{album.name}</Link>
        </li> )}
    </div>

  )
}

export default Albums