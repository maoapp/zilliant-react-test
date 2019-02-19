import React from 'react';
import { shallow } from 'enzyme';

import RepoCard from './RepoCard';

const mockFunctionSelectRepo = jest.fn();

describe('RepoCard tests', () => {
  const props = {
    repo: {
      id: '123',
      name: 'jsx',
      full_name: 'working with jsx',
      language: 'english',
      description: 'in this course you will learn to use jsx'
    },
    selectRepo: mockFunctionSelectRepo
  }

  it('Card should be rendering', () => {
    const wrapper = shallow(<RepoCard {...props}/>);

    expect(wrapper.find('Card')).toBeDefined();
  });

  it('Card onClick should be triggered', () => {
    const wrapper = shallow(<RepoCard {...props}/>);
    const card = wrapper.find('Card');

    card.simulate('click');
    expect(mockFunctionSelectRepo).toBeCalled();
  });

  it('CardTitle should render correctly', () => {
    const wrapper = shallow(<RepoCard {...props}/>);
    const cardTitle = wrapper.find('Card').dive().find('CardTitle');

    expect(cardTitle.prop('title')).toBe('jsx');
    expect(cardTitle.prop('subtitle')).toBe('working with jsx');
    expect(cardTitle.props().avatar).toBeDefined();
  });

  it('CardText should render correctly', () => {
    const wrapper = shallow(<RepoCard {...props}/>);
    const cardText = wrapper.find('Card').dive().find('CardText');
    const listItem = cardText.find('List').dive().find('ListItem');

    expect(cardText.find('p').text()).toBe('in this course you will learn to use jsx');
    expect(listItem.prop('primaryText')).toBe('english');
  })

  it('listItem should render a Unknown language if the property is not defined', () => {
    const wrapper = shallow(<RepoCard {...props}/>);
    wrapper.setProps({
      repo: {
        id: '123',
        name: 'jsx',
        full_name: 'working with jsx',
        language: '',
        description: 'in this course you will learn to use jsx'
      }
    })

    const cardText = wrapper.find('Card').dive().find('CardText');
    const listItem = cardText.find('List').dive().find('ListItem');

    expect(listItem.prop('primaryText')).toBe('Unknown');
  })
});
