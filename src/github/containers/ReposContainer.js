
import Repos from '../components/Repos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import  * as Actions from '../actions/repos';

function mapStateToProps({reposReducer}) {
  return {
    repos: reposReducer.repos,
    isFetchingRepos: reposReducer.isFetchingRepos,
    lastSuccessfulReposFetch: reposReducer.lastSuccessfulReposFetch,
    selectedRepo: reposReducer.selectedRepo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos)
