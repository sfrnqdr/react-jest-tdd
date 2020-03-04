import React from 'react';
import App from './App';

import TestRenderer from 'react-test-renderer';

 it('renders correctly and matched snapshot', () => {
  const testRenderer = TestRenderer.create(<App />).toJSON();
  expect(testRenderer).toMatchSnapshot();
});