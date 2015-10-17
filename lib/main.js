import 'react-fastclick';
import {director, Router} from 'director';
import React from 'react';
import {HomePage} from './home.jsx!';
import {bootstrap} from './bootstrap';
import {emitter} from './events';
bootstrap();

var
renderView = function(View) {
  React.render(
    <View />,
    document.body
  );
},
routes = {
  '': {
    on: renderView.bind(this, HomePage),
    '/:image': {
      on: function(image) {
        // DEBUG
        console.log("image:", image);
        emitter.emit('lightBox:openImage', image);
      }
    }
  }
};

var router = Router(routes);

router.configure({
  html5history: true,
  recurse: 'forward'
});

router.init('/');
