
import React from 'react';
import renderer from 'react-test-renderer';
import Alarm from './alarm.component';
 
describe('Alarm component', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Alarm />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
