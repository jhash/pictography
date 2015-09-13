import React from 'react';
import {scrollEvents} from './events';
import {Collage} from './collage.jsx!';

var styles = {
  homePage: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    subtitle: {
      color: 'red',
    }
  },
};

var imgs = [
  {
    link: 'images/bencolortunnel.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/fishyspring2.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/mrlizardcamo.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/nylove.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/picturedrock.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/mackinac.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/tahquanoneemee.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/faveladrummerboys.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/live.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/oRio.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/sunshine.jpg',
    alt: 'Sexiness'
  },
  {
    link: 'images/iguacu.jpg',
    alt: 'Sexiness'
  },
];

imgs = imgs.concat(imgs);

export var HomePage = React.createClass({
  componentDidMount: function() {
    scrollEvents.startListening();
  },
  componentWillUnmount: function() {
    scrollEvents.stopListening();
  },
  render: function() {
    return <div style={styles.homePage}>
      <Collage imgs={imgs}/>
    </div>;
  }
});


