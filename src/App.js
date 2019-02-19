import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './github/reducers/';

import '../node_modules/react-md/dist/react-md.deep_orange-blue.min.css'
import Layout from './github/containers/LayoutContainer'
import Repos from './github/containers/ReposContainer'

const store = createStore(AppReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Layout>
          <Repos />
        </Layout>
      </Provider>
    )
  }
}

export default App;
