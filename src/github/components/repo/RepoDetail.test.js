import React from 'react';
import { shallow } from 'enzyme';

import RepoDetail from './RepoDetail';

const mockFunctionUnSelectRepo = jest.fn();

describe('Repo Detail tests', () => {

  const props = {
    repo: {
      id: '123',
      name: 'jsx',
      full_name: 'working with jsx',
      language: 'english',
      description: 'in this course you will learn to use jsx'
    },
    unSelectRepo: mockFunctionUnSelectRepo
  }

  it('a div container should render correctly', () => {
    const wrapper = shallow(<RepoDetail {...props}/>);

    expect(wrapper.find('div')).toBeDefined();
  });

  it('Paper should be rendering with the title correctly', () => {
    const wrapper = shallow(<RepoDetail {...props}/>);
    const paper = wrapper.find('Paper');

    expect(paper.dive().find('h2').text()).toBe('jsx');
    expect(paper.find('DataTable')).toBeDefined();
  });
});
