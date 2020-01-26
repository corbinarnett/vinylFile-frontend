export default function accountReducer(state = { albums: [] }, action) {
  // console.log(action.payload)
  switch (action.type) {
    case "FETCH_ALBUMS":
      return { albums: action.payload };
    case "CREATE_ALBUM":
      return { ...state, albums: [...state.albums, action.payload] };
    case "CREATE_REVIEW":
      let albums = state.albums.map(album => {
        if (album.id === action.payload.id) {
          return action.payload;
        } else {
          return album;
        }
      });
      return { ...state, albums: albums };

    default:
      return state;
  }
}
