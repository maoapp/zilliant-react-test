import React, { Component } from 'react'
import { CircularProgress } from 'react-md'

import TopBar from './TopBar'
import Sidebar from './Sidebar'
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
    const { isFetchingUser, children } = this.props
    return (
      isFetchingUser
        ? <CircularProgress id='main-progress' />
        : <div>
          <TopBar />
          <div className='main-container'>
            <Sidebar />
            {children}
          </div>
        </div>
    )
  }
}


export default connect(Layout)
