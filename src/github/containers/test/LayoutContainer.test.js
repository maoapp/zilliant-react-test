// @Vendors
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

// @Screens
import Layout from '../LayoutContainer';

// @Mocks
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockInitialState = {
  user: null,
  isFetchingUser: false,
  lastSuccessfulUserFetch: null,
  errorMsg: ''
}

const store = mockStore({
  userReducer : mockInitialState
});

describe('layoutContainer test suite', () => {
  it('should have a connect', () => {
    const wrapper = shallow(<Provider store={store}><Layout /></Provider>);

    expect(wrapper.find('Connect(Layout)')).toHaveLength(1);
  });
});
