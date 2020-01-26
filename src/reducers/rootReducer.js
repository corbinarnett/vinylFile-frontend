export default function accountReducer(state = {albums: []}, action) {
  // console.log(action.payload)
  switch (action.type) {
    case 'FETCH_ALBUMS':
      return {albums: action.payload}
      
    default: 
      return state
    }
}