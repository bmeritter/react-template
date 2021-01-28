import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../src/pages/home/Home';

describe('About component', () => {
	it('snapshot', () => {
		const comp = renderer.create( <Home />);
		expect(comp).toMatchSnapshot();
	});
});
