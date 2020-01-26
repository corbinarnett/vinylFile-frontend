import React from 'react'

function Reviews(props) {
  // console.log(props.reviews)
  return (
    <div>
      {props.reviews && props.reviews.map(review => 
        <h5 key={review.id}>{review.content}</h5>
      
        
      )}
    </div>
  )
}


export default Reviews