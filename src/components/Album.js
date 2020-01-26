import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'



const Album = (props) => {

  console.log(props)
  let album = props.albums.filter(album => album.id == props.match.params.id)[0]

  console.log(album)
  return (

    <div>
      <h2>
        {album && album.name}
      </h2>
      <ReviewsContainer album={album}/>
    </div>
  )


}

export default Album