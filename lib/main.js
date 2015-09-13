import React from 'react';
import {HomePage} from './home';
import {bootstrap} from './bootstrap';
bootstrap();

React.render(
  <HomePage />,
  document.getElementById('container')
);