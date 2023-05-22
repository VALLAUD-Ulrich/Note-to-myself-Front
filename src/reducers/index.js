import { combineReducers } from 'redux';
import headerReducer from './headerReducers';
import restaurantReducer from './restaurantReducer';
import userReducer from './userReducer';
import fieldReducer from './fieldReducer';
import mementoReducer from './mementoReducer';
import uploadReducer from './uploadReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  restaurant: restaurantReducer,
  user: userReducer,
  field: fieldReducer,
  upload: uploadReducer,
  memento: mementoReducer,
});

export default rootReducer;
