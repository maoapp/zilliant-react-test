import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Snackbar } from 'react-md';

import TopBar from './TopBar'
import Sidebar from './Sidebar'

class Layout extends Component {
  componentDidMount() {
    const { fetchUser, lastSuccessfulUserFetch } = this.props
    const now = new Date()
    if (!lastSuccessfulUserFetch) {
      fetchUser()
    } else if ((now - lastSuccessfulUserFetch) / 1000 > 300) {
      fetchUser()
    }
  }

  render() {
    const { isFetchingUser, children, errorMsg, dismissError, user, fetchUser, fetchRepos } = this.props
    const toasts = errorMsg ? [{ text: errorMsg }] :[]

    return (
      <div>
        {
          isFetchingUser
            ? <CircularProgress id='main-progress' />
            : <div>
              <TopBar {...{user, updateUser: fetchUser, updateRepos: fetchRepos}}/>
              <div className='main-container'>
                <Sidebar {...{user}}/>
                {children}
              </div>
            </div>
        }
        <Snackbar
          id='error-snackbar'
          toasts={toasts}
          onDismiss={dismissError}
        />
      </div>
    )
  }
}

Layout.propTypes = {
  user: PropTypes.shape(),
  isFetchingUser: PropTypes.bool.isRequired,
  lastSuccessfulUserFetch: PropTypes.shape(),
  fetchUser: PropTypes.func,
  dismissError: PropTypes.func
}

export default Layout;
