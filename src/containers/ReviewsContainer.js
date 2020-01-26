import React from 'react'
// import ReviewForm from '../components/ReviewForm'
import Reviews from '../components/Reviews'



function ReviewsContainer(props) {
  

    return (
      <div>
        <Reviews reviews={props.album && props.album.reviews}/>
      </div>
    )
}

export default ReviewsContainer

// this component is receiveing props from the AlbumsContainer