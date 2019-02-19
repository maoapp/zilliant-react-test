import Layout from '../components/layout/Layout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/user';
import * as repoActions from '../actions/repos';

function mapStateToProps({userReducer}) {
  return {
    user: userReducer.user,
    isFetchingUser: userReducer.isFetchingUser,
    lastSuccessfulUserFetch: userReducer.lastSuccessfulUserFetch,
    errorMsg: userReducer.errorMsg
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...Actions, ...repoActions}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
