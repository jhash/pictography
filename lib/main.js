import 'react-fastclick';
import React from 'react';
import {HomePage} from './home.jsx!';
import {bootstrap} from './bootstrap';
bootstrap();

React.render(
  <HomePage />,
  document.body
);