import 'react-native';
import React from 'react';
import Home from '../../app/screens/Home';

import renderer from 'react-test-renderer';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
