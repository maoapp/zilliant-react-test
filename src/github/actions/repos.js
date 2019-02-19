import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESSFUL,
  FETCH_REPOS_FAILURE,
  SELECTED_REPO,
  UNSELECTED_REPO
 } from '../constants/actionTypes';

import { getRepos } from '../requests'

const reposRequested = () => ({
  type: FETCH_REPOS_REQUEST
});

const reposRequestSuccess = data => ({
  type: FETCH_REPOS_SUCCESSFUL,
  payload: data
});

const reposRequestFailure = error => ({
  type: FETCH_REPOS_FAILURE
});

const selectRepo = id => ({
  type: SELECTED_REPO,
  payload: id
});

const unselectRepo = () => ({
  type: UNSELECTED_REPO
})

const fetchRepos = () => dispatch => {
  dispatch(reposRequested());
  getRepos
  .then(res => {
    dispatch(reposRequestSuccess(res.data))
  })
  .catch(() => {
    dispatch(reposRequestFailure())
  })
}

export {
  fetchRepos,
  selectRepo,
  unselectRepo
}
