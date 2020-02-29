import 'react-native';
import React from 'react';
import ButtonRow from '../../app/components/ButtonRow';

import renderer from 'react-test-renderer';

describe('ButtonRow', () => {
  it ('renders correctly', () => {
    const tree = renderer.create(<ButtonRow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
