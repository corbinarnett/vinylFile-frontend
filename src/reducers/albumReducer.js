export default function albumReducer(state = { albums: [] }, action) {
  switch (action.type) {
    case "FETCH_ALBUMS":
      return { albums: action.payload };

    default:
      return state;
  }
}
