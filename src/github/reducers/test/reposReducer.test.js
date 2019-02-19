// @Constatns
import { ERROR_FETCHING_REPOS } from '../../constants/constants';

import reposReducer from '../reposReducer'

import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESSFUL,
  FETCH_REPOS_FAILURE
 } from '../../constants/actionTypes';

  const reposMock =  [
    {
      id: '123',
      name: 'jsx',
      full_name: 'working with jsx',
      language: 'english',
      description: 'in this course you will learn to use jsx'
    },
    {
      id: '456',
      name: 'react-native',
      full_name: 'react-native in deep',
      language: 'spanish',
      description: 'in this course you will develop your own mobile app'
    }
  ]

const INITIAL_STATE = {
  repos: [],
  isFetchingRepos: false,
  lastSuccessfulReposFetch: null,
  errorMsg: '',
  selectedRepo: null
}

describe('reposReducer test suite', ()=>{
  it('should return the initial state', () => {
    const expected = INITIAL_STATE
    expect(reposReducer(undefined, {})).toEqual(expected)
  })

  it('should return a new state with repos fetched', () => {
    const expected = { ...INITIAL_STATE, repos: reposMock, isFetchingRepos: false, lastSuccessfulReposFetch: new Date() }
    expect(reposReducer(undefined, { type: FETCH_REPOS_SUCCESSFUL, payload: reposMock})).toEqual(expected)
  })

  it('should return a new state with fetching in true', () => {
    const expected = { ...INITIAL_STATE, isFetchingRepos: true}
    expect(reposReducer(undefined, { type: FETCH_REPOS_REQUEST})).toEqual(expected)
  })

  it('should return a new state with error of fetch', () => {
    const expected = { ...INITIAL_STATE, isFetchingRepos: false, errorMsg: ERROR_FETCHING_REPOS}
    expect(reposReducer(undefined, { type: FETCH_REPOS_FAILURE})).toEqual(expected)
  })
})
