import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESSFUL,
  FETCH_REPOS_FAILURE,
  SELECTED_REPO,
  UNSELECTED_REPO
 } from '../constants/actionTypes';

import { ERROR_FETCHING_REPOS } from '../constants/constants';

const INITIAL_STATE = {
  repos: [],
  isFetchingRepos: false,
  lastSuccessfulReposFetch: null,
  errorMsg: '',
  selectedRepo: null
}

const reposReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return {...state, isFetchingRepos: true}
    case FETCH_REPOS_SUCCESSFUL:
      return {...state, repos: action.payload, isFetchingRepos: false, lastSuccessfulReposFetch: new Date()}
    case FETCH_REPOS_FAILURE: 
      return {...state, isFetchingRepos: false, errorMsg: ERROR_FETCHING_REPOS}  
    case SELECTED_REPO:
      return {...state, selectedRepo: state.repos.find(repo => repo.id === action.payload)}   
    case UNSELECTED_REPO:
      return {...state, selectedRepo: null}    
    default:
      return state
  }
}

export default reposReducer
