import React, { Component, createContext } from 'react'

import { getUser, getRepos } from './requests'

const GitHubContext = createContext()

export const connect = ChildComponent => {
  return props => {
    return (
      <GitHubContext.Consumer>
        {store => (<ChildComponent {...props} {...store} />)}
      </GitHubContext.Consumer>
    )
  }
}

export class GitHubStore extends Component {
  state = {
    user: null,
    repos: [],
    selectedRepo: null,
    isFetchingUser: false,
    isFetchingRepos: false,
    errorMsg: null,
    lastSuccessfulUserFetch: null,
    lastSuccessfulReposFetch: null
  }

  updateUser = () => {
    this.setState({ isFetchingUser: true })
    getUser
      .then(res => {
        this.setState({
          user: res.data,
          isFetchingUser: false,
          lastSuccessfulUserFetch: new Date()
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          errorMsg: 'Could not fetch User :(',
          isFetchingUser: false
        })
      })
  }

  updateRepos = () => {
    this.setState({ isFetchingRepos: true })
    getRepos
      .then(res => {
        this.setState({
          repos: res.data,
          isFetchingRepos: false,
          lastSuccessfulReposFetch: new Date()
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          errorMsg: 'Could not fetch Repos :(',
          isFetchingRepos: false
        })
      })
  }

  dismissError = () => {
    this.setState({ errorMsg: null })
  }

  selectRepo = (id) => {
    return () => {
      const { repos } = this.state

      const selectedRepo = repos.find(repo => {
        return repo.id === id
      })
      if (selectedRepo) { this.setState({ selectedRepo }) }
    }
  }

  unselectRepo = () => {
    this.setState({ selectedRepo: null })
  }

  render() {
    return (
      <GitHubContext.Provider
        value={{
          ...this.state,
          updateUser: this.updateUser,
          updateRepos: this.updateRepos,
          selectRepo: this.selectRepo,
          unselectRepo: this.unselectRepo,
          dismissError: this.dismissError
        }}
      >
        {this.props.children}
      </GitHubContext.Provider>
    )
  }
}
