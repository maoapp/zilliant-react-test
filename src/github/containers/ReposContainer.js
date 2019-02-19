
import Repos from '../components/repo/Repos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import  * as Actions from '../actions/repos';

const getReposReducerState = (state, property) => state[property];

function mapStateToProps({reposReducer}) {
  return {
    repos: getReposReducerState(reposReducer, 'repos'),
    isFetchingRepos: getReposReducerState(reposReducer, 'isFetchingRepos'),
    lastSuccessfulReposFetch: getReposReducerState(reposReducer, 'lastSuccessfulReposFetch'),
    selectedRepo: getReposReducerState(reposReducer, 'selectedRepo')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos)
