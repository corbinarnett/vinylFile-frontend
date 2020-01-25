import React from 'react'
import ReviewsContainer from '../containers/ReviewsContainer'
// import {Redirect} from 'react-router-dom'

function AlbumProfile(props) {

  let album = props.albums[props.match.params.id - 1]
  // console.log(album)
  return (
    <div>
      <ReviewsContainer />
      {album ? album.reviews.map((review) => review.content) : null} 
    </div>
  )
}

export default AlbumProfile