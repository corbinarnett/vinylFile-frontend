import React, { Component } from 'react'
import ReviewForm from '../components/ReviewForm'
import ReviewIndex from '../components/ReviewIndex'

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        ReviewsContainer
        <ReviewForm/>
        <ReviewIndex/>
      </div>
    )
  }
}

export default ReviewsContainer