
import React from 'react';
import renderer from 'react-test-renderer';
import InstanceView from './instance';
 
describe('Instance View', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<InstanceView />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
