import React from 'react'



const Account = (props) => {

  console.log(props)
  let album = props.albums.filter(album => album.id == props.match.params.id)[0]

  console.log(album)
  return (

    <div>
      <h2>
        {album && album.name}
      </h2>

    </div>
  )


}

export default Account