// @Vendors
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

// @Screens
import Repos from '../ReposContainer';

// @Mocks
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockInitialState = {
  repos: [],
  isFetchingRepos: false,
  lastSuccessfulReposFetch: null,
  errorMsg: '',
  selectedRepo: null
}

const store = mockStore({
  reposReducer : mockInitialState
});

describe('repos test suite', () => {
  it('should have a connect', () => {
    const wrapper = shallow(<Provider store={store}><Repos /></Provider>);

    expect(wrapper.find('Connect(Repos)')).toHaveLength(1);
  });
});
