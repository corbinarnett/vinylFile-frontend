export function createReview(formData, albumId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/albums/${albumId}/reviews`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(album => dispatch({
      type: 'CREATE_REVIEW',
      payload: album
    }))
  }
}




