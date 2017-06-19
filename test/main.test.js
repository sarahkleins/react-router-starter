/* eslint-disable no-undef */

import React from 'react';
import Main from '../src/pages/main';
import { mount } from 'enzyme';

test('welcomes the user to React Router', function() {
  const wrapper = mount(<Main />);

  expect(wrapper.text()).toContain('Hello React Router!');
});