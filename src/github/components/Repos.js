import React, { Component } from 'react'
import {
  Grid,
  Card,
  CircularProgress,
  Cell,
  CardTitle
} from 'react-md'

import { connect } from '../store'
import RepoCard from './RepoCard'

class Repos extends Component {
  componentDidMount() {
    const { updateRepos, lastSuccessfulReposFetch } = this.props

    const now = new Date()
    if (!lastSuccessfulReposFetch) {
      updateRepos()
    } else if ((now - lastSuccessfulReposFetch) / 1000 > 300) {
      updateRepos()
    }
  }

  render() {
    const { isFetchingRepos, repos } = this.props
    console.log(repos)
    return (
      isFetchingRepos
        ? <CircularProgress id='repos-progress' />
        : <Grid>
          {
            repos.map((repo, idx) => {
              return (
                <Cell key={idx} size={6}>
                  <RepoCard repo={repo} />
                </Cell>
              )
            })
          }
        </Grid>
    )
  }
}

export default connect(Repos)
