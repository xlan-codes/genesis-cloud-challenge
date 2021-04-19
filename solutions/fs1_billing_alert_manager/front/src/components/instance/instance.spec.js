
import React from 'react';
import renderer from 'react-test-renderer';
import Instance from './instance.component';
 
describe('Instance component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Instance />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
