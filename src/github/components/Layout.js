import React, { Component } from 'react'

import TopBar from './TopBar'
import { connect } from '../store'

class Layout extends Component {

  componentDidMount() {
    const { updateUser, lastSuccessfulUserFetch } = this.props
    const now = new Date()
    if (!lastSuccessfulUserFetch) {
      updateUser()
    } else if ((now - lastSuccessfulUserFetch) / 1000 > 300) {
      updateUser()
    }
  }

  render() {
    const { isFetchingUser, user, updateUser } = this.props
    return (
      isFetchingUser
        ? <h1>Fetching!</h1>
        : <TopBar user={user} updateUser={updateUser} />
    )
  }
}


export default connect(Layout)
