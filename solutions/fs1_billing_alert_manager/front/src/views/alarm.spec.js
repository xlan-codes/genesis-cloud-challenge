
import React from 'react';
import renderer from 'react-test-renderer';
import AlarmView from './alarm';
 
describe('Alarm View', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<AlarmView />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
