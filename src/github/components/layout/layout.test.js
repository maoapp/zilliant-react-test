import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';

const mockFunctionFetchUser = jest.fn();
const mockFunctionFetchRepos = jest.fn();
const mockFunctionDismissError = jest.fn();

describe('layout tests', () => {
  const props = {
    user: {
      following: 4,
      followers: 10,
      public_repos: 20,
      public_gists: 3,
      avatar_url: 'urlMock'
    },
    isFetchingUser: false,
    errorMsg: null,
    dismissError: mockFunctionDismissError,
    fetchUser: mockFunctionFetchUser,
    fetchRepos: mockFunctionFetchRepos,
    lastSuccessfulUserFetch: null
  }

  it('3 div containers should render if isFetchingUser is false', () => {
    const wrapper = shallow(<Layout {...props}/>);

    expect(wrapper.find('div').length).toBe(3);
    expect(mockFunctionFetchUser).toHaveBeenCalled();
  });

  it('1 div containers should render if isFetchingUser is true', () => {
    const wrapper = shallow(<Layout {...props}/>);
    wrapper.setProps({
      isFetchingUser: true
    })

    expect(wrapper.find('div').length).toBe(1);
  });

  it('1 CircularProgress should render if isFetchingUser is true', () => {
    const wrapper = shallow(<Layout {...props}/>);
    wrapper.setProps({
      isFetchingUser: true
    })

    expect(wrapper.find('CircularProgress').length).toBe(1);
  });

  it('Topbar should render correctly', () => {
    const wrapper = shallow(<Layout {...props}/>);
    const topBar = wrapper.find('TopBar');

    expect(topBar.length).toBe(1);
    expect(topBar.prop('user')).toBeDefined();
    expect(topBar.prop('updateUser')).toBeDefined();
    expect(topBar.prop('updateRepos')).toBeDefined();
  });

  it('Sidebar should render correctly', () => {
    const wrapper = shallow(<Layout {...props}/>);
    const sidebar = wrapper.find('Sidebar');

    expect(sidebar.length).toBe(1);
    expect(sidebar.prop('user')).toBeDefined();
  });

  it('Snackbar should render correctly', () => {
    const wrapper = shallow(<Layout {...props}/>);
    const snackbar = wrapper.find('SnackbarContainer');

    expect(snackbar.length).toBe(1);
    expect(snackbar.prop('onDismiss')).toBeDefined();
  });

  it('Snackbar should render with a toast message', () => {
    const wrapper = shallow(<Layout {...props}/>);
    wrapper.setProps({
      errorMsg: 'error fetching'
    })

    expect(wrapper.find('SnackbarContainer').props().toasts[0].text).toBe('error fetching');
  });
});
