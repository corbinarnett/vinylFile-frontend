import React from 'react'
import ReviewForm from '../components/ReviewForm'
import ReviewIndex from '../components/ReviewIndex'
import AlbumProfile from '../components/AlbumProfile'

function ReviewsContainer(props) {
  
  let album = props.albums[props.match.params.id - 1]

    return (
      <div>
        <ReviewForm album={album}/>
        <AlbumProfile album={album && album}/>
        <ReviewIndex reviews={album && album.reviews}/>
      </div>
    )
}

export default ReviewsContainer

// this component is receiveing props from the AlbumsContainer