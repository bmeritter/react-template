import React from 'react';
import renderer from 'react-test-renderer';
import About from "../src/about/About";

describe('About component', () => {
	it('snapshot', () => {
		const comp = renderer.create( <About />)
		expect(comp).toMatchSnapshot();
	});
})
