import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
  albums: albumReducer,
  reviews: reviewReducer
})

export default rootReducer