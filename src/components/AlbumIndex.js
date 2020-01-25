import React from 'react'
import AlbumIndexCard from './AlbumIndexCard'

function AlbumIndex(props) {

  const albums = props.albums.map((album) => {
    return (
      <div key={album.id}>
        <AlbumIndexCard album={album} />
      </div>
    )
  })

  return (
    <div>
      {albums}
    </div>
  )
 
}

export default AlbumIndex

// props are sent from the AlbumsContainer

// import React from 'react'
// import AlbumCard from './AlbumIndexCard'

// function AlbumIndex(props) {
//   let albumCards =  props.albums.map(album => {
//     return (
//       <fieldset key={album.id}>
//         <div>
//           <AlbumCard album={album} />
//         </div>
//       </fieldset>
//     )
//   })
//   return (
//     <div>
//       {albumCards}
//     </div>
//   )
// }


// // stateless component #1
// export default AlbumIndex


