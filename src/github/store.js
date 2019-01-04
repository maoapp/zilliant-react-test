import React, { Component, createContext } from 'react'

import { getUser } from './requests'

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
    console.log('Gonna fetch')
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

  render() {
    return (
      <GitHubContext.Provider
        value={{ ...this.state, updateUser: this.updateUser }}
      >
        {this.props.children}
      </GitHubContext.Provider>
    )
  }
}
