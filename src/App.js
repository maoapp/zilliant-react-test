import React, { Component } from 'react';

import '../node_modules/react-md/dist/react-md.deep_orange-blue.min.css'
import { GitHubStore } from './github/store'
import Layout from './github/components/Layout'

class App extends Component {
  render() {
    return (
      <GitHubStore>
        <Layout />
      </GitHubStore>
    );
  }
}

export default App;
