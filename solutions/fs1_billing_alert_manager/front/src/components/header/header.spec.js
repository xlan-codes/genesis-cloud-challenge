
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';
 
describe('Header component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
