import Layout from '../components/layout/Layout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/user';
import * as repoActions from '../actions/repos';

const getUserReducerState = (state, property) => state[property];

function mapStateToProps({userReducer}) {
  return {
    user: getUserReducerState(userReducer, 'user'),
    isFetchingUser: getUserReducerState(userReducer, 'isFetchingUser'),
    lastSuccessfulUserFetch: getUserReducerState(userReducer, 'lastSuccessfulUserFetch'),
    errorMsg: getUserReducerState(userReducer, 'errorMsg')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...Actions, ...repoActions}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
