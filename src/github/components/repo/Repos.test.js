import React from 'react';
import { shallow } from 'enzyme';

import Repos from './Repos';

const mockFunctionFetchRepos = jest.fn();
const mockFunctionSelectRepo = jest.fn();
const mockFunctionUnselectRepo = jest.fn();

const repos = [
  {
    id: '123',
    name: 'jsx',
    full_name: 'working with jsx',
    language: 'english',
    description: 'in this course you will learn to use jsx'
  },
  {
    id: '456',
    name: 'react-native',
    full_name: 'react-native in deep',
    language: 'spanish',
    description: 'in this course you will develop your own mobile app'
  }
]

describe('Repos tests', () => {
  const props = {
    repos,
    selectedRepo: null,
    isFetchingRepos: false,
    unselectRepo: mockFunctionUnselectRepo,
    selectRepo: mockFunctionSelectRepo,
    fetchRepos: mockFunctionFetchRepos,
    lastSuccessfulReposFetch: null
  }

  it('should render a repo list', () => {
    const wrapper = shallow(<Repos {...props}/>);

    expect(wrapper.find('RepoList').length).toBe(1);
    expect(mockFunctionFetchRepos).toHaveBeenCalled();
  });

  it('CircularProgress should be rendering', () => {
    const wrapper = shallow(<Repos {...props}/>);
    wrapper.setProps({
      isFetchingRepos: true
    })

    expect(wrapper.find('CircularProgress').length).toBe(1);
  });

  it('RepoDetail should be rendering', () => {
    const wrapper = shallow(<Repos {...props}/>);
    wrapper.setProps({
      selectedRepo: repos[0]
    })

    expect(wrapper.find('RepoDetail').length).toBe(1);
  });
});
