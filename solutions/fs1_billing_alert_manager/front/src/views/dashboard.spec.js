
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './dashboard';
 
describe('Dashboard View', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Dashboard />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
