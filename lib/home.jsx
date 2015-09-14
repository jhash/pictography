import React from 'react';
import {Collage} from './collage.jsx!';
import {LightBox} from './lightBox.jsx!';
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
  closeLightBox: function() {
    this.setState({ lightBoxImage: null });
  },
  openLightBox: function(img) {
    this.setState({ lightBoxImage: img });
  },
  getInitialState: function() {
    return { images: imgs.slice() };
  },
  loadMore: function() {
    this.setState({ images: this.state.images.concat(imgs.slice()) });
  },
  render: function() {
    return <div>
      { this.state.lightBoxImage ? <LightBox closeLightBox={this.closeLightBox} img={this.state.lightBoxImage} /> : ''}
      <InfiniteScroll loadMore={this.loadMore}>
        <Collage imgs={this.state.images} openLightBox={this.openLightBox} />
      </InfiniteScroll>
    </div>;
  }
});


