import React from 'react';
import { shallow } from 'enzyme';

import RepoList from './RepoList';

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

describe('Repo List tests', () => {
  const props = {
    repos,
    selectRepo: repos[0]
  }

  it('a grid container should be render', () => {
    const wrapper = shallow(<RepoList {...props}/>);

    expect(wrapper.find('Grid')).toBeDefined();
  });

  it('two cell should be render', () => {
    const wrapper = shallow(<RepoList {...props}/>);

    const cell = wrapper.find('Grid').dive().find('Cell');
    expect(cell.length).toBe(repos.length)
  });

  it('RepoCard should be render with the props correctly', () => {
    const wrapper = shallow(<RepoList {...props}/>);

    const RepoCard = wrapper.find('Grid').dive().find('Cell').first().dive().find('RepoCard').first();
    expect(RepoCard.prop('repo')).toBeDefined();
    expect(RepoCard.prop('selectRepo')).toBeDefined();
  });
});
