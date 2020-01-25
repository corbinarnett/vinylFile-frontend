export function fetchAlbums() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/albums")
      .then(res => res.json())
      .then(albums =>
        dispatch({
          type: "FETCH_ALBUMS",
          payload: albums,
        })
      );
  };
}

export function createAlbum(formData) {
    return (dispatch) => {
    fetch("http://localhost:3000/api/v1/albums", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(album => dispatch({
      type: 'CREATE_ALBUM',
      payload: album
    }))
  }
}