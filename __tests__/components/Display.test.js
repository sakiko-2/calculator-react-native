import 'react-native';
import React from 'react';
import Display from '../../app/components/Display';

import renderer from 'react-test-renderer';

describe('Display', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
