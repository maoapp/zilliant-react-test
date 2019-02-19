import React, { Component } from 'react'
import { CircularProgress } from 'react-md'
import PropTypes from 'prop-types';

import RepoList from './RepoList'
import RepoDetail from './RepoDetail'

class Repos extends Component {
  componentDidMount() {
    const { fetchRepos, lastSuccessfulReposFetch } = this.props

    const now = new Date()
    if (!lastSuccessfulReposFetch) {
      fetchRepos()
    } else if ((now - lastSuccessfulReposFetch) / 1000 > 300) {
      fetchRepos()
    }
}

  render() {
    const {
      isFetchingRepos,
      repos,
      selectedRepo,
      selectRepo,
      unselectRepo
    } = this.props
    return (
      isFetchingRepos
        ? <CircularProgress id='repos-progress' />
        : selectedRepo
          ? <RepoDetail repo={selectedRepo} unselectRepo={unselectRepo} />
          : <RepoList repos={repos} selectRepo={selectRepo} />
    )
  }
}

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape()),
  isFetchingRepos: PropTypes.bool.isRequired,
  lastSuccessfulReposFetch: PropTypes.shape(),
  selectRepo: PropTypes.func,
  selectedRepo: PropTypes.shape(),
  unselectRepo: PropTypes.func
}

export default Repos;
