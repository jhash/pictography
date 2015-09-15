import React from 'react';
import {Collage} from './collage.jsx!';
import {LightBox} from './lightBox.jsx!';
import {InfiniteScroll} from './infiniteScroll.jsx!';

var imgs = [
  {
    link: 'images/bencolortunnel.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/fishyspring2.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/mrlizardcamo.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/nylove.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/picturedrock.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/mackinac.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/tahquanoneemee.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/faveladrummerboys.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/live.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/oRio.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/sunshine.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/iguacu.jpg',
    alt: 'Sexiness',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/angel.jpg',
    alt: 'Sexiness',
  },
  {
    link: 'images/pickup.png',
    alt: 'Sexiness',
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
    return <div className='no-scrolling'>
      { this.state.lightBoxImage ? <LightBox closeLightBox={this.closeLightBox} img={this.state.lightBoxImage} /> : ''}
      <InfiniteScroll loadMore={this.loadMore}>
        <Collage imgs={this.state.images} openLightBox={this.openLightBox} />
      </InfiniteScroll>
    </div>;
  }
});


