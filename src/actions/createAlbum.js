export function createAlbum(formData) {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/albums", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })
  }
}
