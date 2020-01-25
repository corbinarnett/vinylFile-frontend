import React, { Component } from 'react'
import ReviewForm from '../components/ReviewForm'
import ReviewIndex from '../components/ReviewIndex'

class ProfileContainer extends Component {
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

export default ProfileContainer