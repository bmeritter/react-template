import React from 'react';
import { shallow } from 'enzyme';
import Home from '../src/pages/home/Home';

describe('Home component', () => {
  it('renderer', () => {
    expect(2).toEqual(1 + 1);
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
