export function fetchAlbums() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/albums')
    .then(resp => resp.json())
    .then(albums => dispatch({
      type: 'FETCH_ALBUMS',
      payload: albums
    }))
  }
}