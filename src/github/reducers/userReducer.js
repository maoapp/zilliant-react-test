import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESSFUL,
  FETCH_USER_FAILURE,
  RESET_ERROR_MESSAGE
 } from '../constants/actionTypes';

import { ERROR_FETCHING_USER } from '../constants/constants';

const INITIAL_STATE = {
  user: null,
  isFetchingUser: false,
  lastSuccessfulUserFetch: null,
  errorMsg: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {...state, isFetchingUser: true}
    case FETCH_USER_SUCCESSFUL:
      return {...state, user: action.payload, isFetchingUser: false, lastSuccessfulUserFetch: new Date()}
    case FETCH_USER_FAILURE: 
      return {...state, isFetchingUser: false, errorMsg: ERROR_FETCHING_USER} 
    case RESET_ERROR_MESSAGE:
      return {...state, errorMsg: null}    
    default:
      return state
  }
}

export default userReducer
