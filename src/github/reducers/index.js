// @Vendors
import { combineReducers } from 'redux';

// @Main reducers
import reposReducer from './reposReducer';
import userReducer from './userReducer';

const AppReducer = combineReducers({
  reposReducer,
  userReducer
})

export default AppReducer
