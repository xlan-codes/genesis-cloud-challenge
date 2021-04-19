
import React from 'react';
import renderer from 'react-test-renderer';
import ImageView from './image';
 
describe('Image View', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<ImageView />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
