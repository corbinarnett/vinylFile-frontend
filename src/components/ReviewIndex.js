import React from 'react'

function ReviewIndex(props) {
    return (
      <div>
        {props.reviews && props.reviews.map(review =>
          <li key={review.id}>{review.username}</li>
        )}
      </div>
    )
}

export default ReviewIndex

// this is being sent props from the ProfileContainer