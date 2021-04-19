
import React from 'react';
import renderer from 'react-test-renderer';
import CreateInstance from './addinstance.component';
 
describe('Create Instance modal', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<CreateInstance  buttonLabel="add instance"/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
