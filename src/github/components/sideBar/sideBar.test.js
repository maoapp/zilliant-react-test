import React from 'react';
import { shallow } from 'enzyme';

import SideBar from './SideBar';

describe('Side Bar tests', () => {

  const props = {
    user: {
      following: 4,
      followers: 10,
      public_repos: 20,
      public_gists: 3
    }
  }

  beforeAll(() => {  
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => { return { matches: true } })
    });
  });

  it('a drawer should be rendering', () => {
    const wrapper = shallow(<SideBar {...props}/>);

    expect(wrapper.find('Drawer')).toBeDefined();
  });

  it('a list should be rendering correctly', () => {
    const wrapper = shallow(<SideBar {...props}/>);
    const list = wrapper.find('Drawer').dive().find('List');

    expect(list.length).toBe(1);
  });

  it('the ListItems should render correctly', () => {
    const wrapper = shallow(<SideBar {...props}/>);
    const list = wrapper.find('Drawer').dive().find('List');
    
    expect(list.find('ListItem').at(0).prop('secondaryText')).toBe(4);
    expect(list.find('ListItem').at(1).prop('secondaryText')).toBe(10);
    expect(list.find('ListItem').at(2).prop('secondaryText')).toBe(20);
    expect(list.find('ListItem').at(3).prop('secondaryText')).toBe(3);
  });
});
