export default function albumReducer(state = { albums: [] }, action) {
  switch (action.type) {
    case "FETCH_ALBUMS":
      return { albums: action.payload };
    case "CREATE_ALBUM":
      return {...state, albums: [...state.albums, action.payload]}
    default:
      return state;
  }
}
