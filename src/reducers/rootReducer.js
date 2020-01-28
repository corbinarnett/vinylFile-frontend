export default function rootReducer(state = { albums: [] }, action) {
  // console.log(action.payload)
  switch (action.type) {
    case "FETCH_ALBUMS":
      return { albums: action.payload };

    case "CREATE_ALBUM":
      return { ...state, albums: [...state.albums, action.payload] };

    case "CREATE_REVIEW":
      let albums = state.albums.map(album => {
        //iterate through albums
        if (album.id === action.payload.id) {
          //find the correct album
          return action.payload; //replace the entire album with a new copy plus the newly created review, this was done so iteration wasn't needed through an albums reviews.
        } else {
          return album;
        }
      });
      return { ...state, albums: albums };
    case "DELETE_REVIEW":
      let album = state.albums.map(album => {
        //iterate through albums
        if (album.id === action.payload.id) {
          //find the correct album
          return action.payload; //replace the entire album with a new copy minus the now deleted review, this was done so iteration wasn't needed through an albums reviews.
        } else {
          return album;
        }
      });
      return { ...state, albums: album };

    default:
      return state;
  }
}
