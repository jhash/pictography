import _ from 'lodash';
import React from 'react';
import {Collage} from './collage.jsx!';
import {LightBox} from './lightBox.jsx!';
import {InfiniteScroll} from './infiniteScroll.jsx!';
import {emitter} from './events';

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
    if (img !== this.state.lightBoxImage) {
      this.setState({ lightBoxImage: img });
    } else {
      this.closeLightBox();
    }
  },
  getInitialState: function() {
    return { images: imgs.slice() };
  },
  loadMore: function() {
    this.setState({ images: this.state.images.concat(imgs.slice()) });
  },
  onKeyUp: _.throttle(function(e) {
    if (!this.state.lightBoxImage) return true;

    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;

    // Left arrow
    if (charCode === 37) {
      emitter.emit('lightBox:previousImage');
      return false;

    // Right arrow
    } else if (charCode === 39) {
      emitter.emit('lightBox:nextImage');
      return false;
    }

    return true;
  }, 200),
  componentWillMount() {
    document.onkeyup = this.onKeyUp;
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


