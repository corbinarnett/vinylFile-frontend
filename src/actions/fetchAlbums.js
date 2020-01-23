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
