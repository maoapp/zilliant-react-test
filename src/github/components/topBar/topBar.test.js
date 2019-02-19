import React from 'react';
import { shallow } from 'enzyme';

import TopBar from './TopBar';

const mockFunctionUpdateUser = jest.fn();
const mockFunctionUpdateRepos = jest.fn();

describe('Side Bar tests', () => {

  const props = {
    user: {
      following: 4,
      followers: 10,
      public_repos: 20,
      public_gists: 3,
      avatar_url: 'urlMock'
    },
    updateUser: mockFunctionUpdateUser,
    updateRepo: mockFunctionUpdateRepos
  }

  it('a Toolbar should be rendering', () => {
    const wrapper = shallow(<TopBar {...props}/>);

    expect(wrapper.find('Toolbar').length).toBe(1);
  });

  it('a Avatar should be rendering correctly', () => {
    const wrapper = shallow(<TopBar {...props}/>);
    const avatar = wrapper.find('Toolbar').dive().find('Avatar');

    expect(avatar.prop('src')).toBe('urlMock');
  });

  //it for simulate clicks
});
