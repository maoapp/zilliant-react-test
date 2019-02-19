// @Constatns
import { ERROR_FETCHING_USER } from '../../constants/constants';

import userReducer from '../userReducer';

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESSFUL,
  FETCH_USER_FAILURE
 } from '../../constants/actionTypes';

const userMock = {
  following: 4,
  followers: 10,
  public_repos: 20,
  public_gists: 3,
  avatar_url: 'urlMock'
}

const INITIAL_STATE = {
  user: null,
  isFetchingUser: false,
  lastSuccessfulUserFetch: null,
  errorMsg: ''
}

describe('userReducer test suite', ()=>{
  it('should return the initial state', () => {
    const expected = INITIAL_STATE
    expect(userReducer(undefined, {})).toEqual(expected)
  })

  it('should return a new state with fetching in true', () => {
    const expected = { ...INITIAL_STATE, isFetchingUser: true}
    expect(userReducer(undefined, { type: FETCH_USER_REQUEST})).toEqual(expected)
  })

  it('should return a new state with user fetched', () => {
    const expected = { ...INITIAL_STATE, user: userMock, isFetchingUser: false, lastSuccessfulUserFetch: new Date()}
    expect(userReducer(undefined, { type: FETCH_USER_SUCCESSFUL, payload: userMock})).toEqual(expected)
  })

  it('should return a new state with error of fetch', () => {
    const expected = { ...INITIAL_STATE, isFetchingUser: false, errorMsg: ERROR_FETCHING_USER}
    expect(userReducer(undefined, { type: FETCH_USER_FAILURE})).toEqual(expected)
  })
})
