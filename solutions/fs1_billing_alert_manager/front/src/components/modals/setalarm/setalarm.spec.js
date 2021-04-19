
import React from 'react';
import renderer from 'react-test-renderer';
import SetAlarm from './setalarm.component';
 
describe('SetAlarm modal', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<SetAlarm  buttonLabel="set alarm"/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
