import React, { Component } from 'react'
import ReviewForm from '../components/ReviewForm'
import ReviewIndex from '../components/ReviewIndex'

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        ReviewsContainer
        <ReviewForm/>
        <ReviewIndex reviews={this.props.album && this.props.album.reviews}/>
      </div>
    )
  }
}

export default ReviewsContainer

// this is receiving props from AlbumProfile