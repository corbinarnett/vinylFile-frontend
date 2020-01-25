import React from 'react'
import ReviewForm from '../components/ReviewForm'
import ReviewIndex from '../components/ReviewIndex'

function ProfileContainer(props) {
  
  let album = props.albums[props.match.params.id - 1]
 
    return (
      <div>
        ProfileContainer
        <ReviewForm/>
        <ReviewIndex reviews={album && album.reviews}/>
      </div>
    )

}

export default ProfileContainer

// this is receiving props from AlbumProfile