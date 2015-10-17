import _ from 'lodash';
import React from 'react';
import {Collage} from './collage.jsx!';
import {LightBox} from './lightBox.jsx!';
import {InfiniteScroll} from './infiniteScroll.jsx!';
import {emitter} from './events';
import 'font-awesome/css/font-awesome.css!';

var imgs = [
  {
    link: 'images/bencolortunnel.jpg',
    alt: 'bencolortunnel',
    id: 'bencolortunnel',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/fishyspring2.jpg',
    alt: 'fishyspring2',
    id: 'fishyspring2',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/mrlizardcamo.jpg',
    alt: 'mrlizardcamo',
    id: 'mrlizardcamo',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/nylove.jpg',
    alt: 'nylove',
    id: 'nylove',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/picturedrock.jpg',
    alt: 'picturedrock',
    id: 'picturedrock',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/mackinac.jpg',
    alt: 'mackinac',
    id: 'mackinac',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/tahquanoneemee.jpg',
    alt: 'tahquanoneemee',
    id: 'tahquanoneemee',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/faveladrummerboys.jpg',
    alt: 'faveladrummerboys',
    id: 'faveladrummerboys',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/live.jpg',
    alt: 'live',
    id: 'live',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/oRio.jpg',
    alt: 'oRio',
    id: 'oRio',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/sunshine.jpg',
    alt: 'sunshine',
    id: 'sunshine',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
  {
    link: 'images/iguacu.jpg',
    alt: 'iguacu',
    id: 'iguacu',
    widths: [1024, 800, 520, 460, 320, 240, 100]
  },
];

export var HomePage = React.createClass({
  selectedImageIndex: function() {
    return _.indexOf(this.state.images, this.state.lightBoxImage);
  },
  nextImage: function() {
    this.openLightBox(this.state.images[this.selectedImageIndex() === this.state.images.length - 1 ? 0 : this.selectedImageIndex() + 1]);
  },
  previousImage: function() {
    this.openLightBox(this.state.images[this.selectedImageIndex() === 0 ? this.state.images.length - 1 : this.selectedImageIndex() - 1]);
  },
  closeLightBox: function() {
    this.setState({ lightBoxImage: null, infiniteScrollStyle: null });
  },
  openLightBox: function(img) {
    this.setState({ lightBoxImage: img, infiniteScrollStyle: { display: 'none' } });
  },
  findAndOpenImage: function(imageId) {
    var image = _.findWhere(this.state.images, { id: imageId });
    if (image) {
      this.openLightBox(image);
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
      this.previousImage();
      return false;

    // Right arrow
    } else if (charCode === 39) {
      this.nextImage();
      return false;

    // Escape key
    } else if (charCode === 27) {
      this.closeLightBox();
      return false;
    }

    return true;
  }, 200),
  componentWillMount: function() {
    document.onkeyup = this.onKeyUp;
    emitter.on('lightBox:openImage', this.findAndOpenImage);
  },
  componentWillUnMount: function() {
    emitter.removeListener('lightBox:openImage', this.findAndOpenImage);
  },
  render: function() {
    return <div className='no-scrolling'>
      { this.state.lightBoxImage ? <LightBox closeLightBox={this.closeLightBox} previousImage={this.previousImage} nextImage={this.nextImage} img={this.state.lightBoxImage} /> : '' }
      <InfiniteScroll loadMore={this.loadMore} styles={ this.state.infiniteScrollStyle }>
        <Collage imgs={this.state.images} openLightBox={this.openLightBox} />
      </InfiniteScroll>
    </div>;
  }
});


