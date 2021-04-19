
import React from 'react';
import renderer from 'react-test-renderer';
import Images from './image.component';
 
describe('Images component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Images />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
