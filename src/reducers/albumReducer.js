export default function albumReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_ALBUMS":
      return action.payload;
    case "CREATE_BOOK":
      return state.concat(action.payload);
    default:
      return state;
  }
}
// export default function albumReducer(state = { albums: [] }, action) {
//   switch (action.type) {
//     case "FETCH_ALBUMS":
//       return { albums: action.payload };
//       case "FETCH_REVIEWS":
//         return { albums: action.payload };
//     case "CREATE_ALBUM":
//       return { ...state, albums: [...state.albums, action.payload] };
//     case "CREATE_REVIEW":
//       let albums = state.albums.map(album => {
//         if (album.id === action.payload.id) {
//           return action.payload;
//         } else {
//           return album;
//         }
//       });
//       return { ...state, album: albums };

//     default:
//       return state;
//   }
// }
