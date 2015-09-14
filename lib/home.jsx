import React from 'react';
import {Collage} from './collage.jsx!';
import {InfiniteScroll} from './infiniteScroll.jsx!';

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

export var HomePage = React.createClass({
  getInitialState: function() {
    return { images: imgs.slice() };
  },
  loadMore: function() {
    this.setState({ images: this.state.images.concat(imgs.slice()) });
  },
  render: function() {
    return <div>
      <LightBox />
      <InfiniteScroll loadMore={this.loadMore}>
        <Collage imgs={this.state.images}/>
      </InfiniteScroll>
    </div>;
  }
});


