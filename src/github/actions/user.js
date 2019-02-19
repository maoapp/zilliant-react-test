import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESSFUL,
  FETCH_USER_FAILURE,
  RESET_ERROR_MESSAGE
 } from '../constants/actionTypes';

import { getUser } from '../requests'

const userRequested = () => ({
  type: FETCH_USER_REQUEST
});

const userRequestSuccess = user => ({
  type: FETCH_USER_SUCCESSFUL,
  payload: user
});

const userRequestFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: { error }
});

const dismissError = () => ({
  type: RESET_ERROR_MESSAGE
})

const fetchUser = () => dispatch => {
  dispatch(userRequested());
  getUser
  .then(res => {
    dispatch(userRequestSuccess(res.data))
  })
  .catch(err => {
    dispatch(userRequestFailure())
  })
}

export {
  fetchUser,
  dismissError
}
