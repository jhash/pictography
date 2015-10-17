import _ from 'lodash';
import React from 'react';
import Masonry from 'masonry-layout';
import {Image} from './image.jsx!';
import {emitter} from './events';

var
collageContainerStyles = {
  img: {
    width: '100%',
    padding: '5px',
    boxSizing: 'border-box'
  }
};

export var Collage = React.createClass({
  displayName: 'Collage',
  selectedImageIndex: function() {
    if (!this.state.selectedImageIndex) this.setState({ selectedImageIndex: _.indexOf(this.props.imgs, this.state.selectedImage) });
    return this.state.selectedImageIndex;
  },
  nextImage: function() {
    this.onImageClick(this.props.imgs[this.selectedImageIndex() === this.props.imgs.length - 1 ? 0 : this.selectedImageIndex() + 1]);
  },
  previousImage: function() {
    this.onImageClick(this.props.imgs[this.selectedImageIndex() === 0 ? this.props.imgs.length - 1 : this.selectedImageIndex() - 1]);
  },
  getImageState: function() {
    var widthMultiplier = this.getWidthMultiplier();

    return {
      widthMultiplier: widthMultiplier,
      imageItemStyles: {
        width: (100 / widthMultiplier) + '%',
        margin: '0',
        padding: '0',
      }
    };
  },
  onResize: function() {
    this.setState(this.getImageState());
  },
  getWidthMultiplier: function() {
    if (window.innerWidth > 1200) {
      return 3;
    } else if (window.innerWidth > 700) {
      return 2;
    } else {
      return 1;
    }
  },
  onImageClick: function(img) {
    if (_.isFunction(this.props.openLightBox)) {
      this.props.openLightBox(img);
    }
    this.setState({ selectedImage: img === this.state.selectedImage ? null : img, selectedImageIndex: null });
  },
  onImageLoad: function() {
    this.msnry.layout();
  },
  getInitialState: function() {
    return this.getImageState();
  },
  componentWillUnmount: function() {
    emitter.removeEventListener('lightBox:nextImage', this.nextImage);
    emitter.removeEventListener('lightBox:previousImage', this.previousImage);
    window.removeEventListener('resize', this.onResize);
  },
  componentWillMount: function() {
    emitter.on('lightBox:nextImage', this.nextImage);
    emitter.on('lightBox:previousImage', this.previousImage);
    window.addEventListener('resize', this.onResize);
  },
  render: function() {
    return <div ref="masonryContainer" className="collage-container">
      {this.props.imgs.map((img) => {
        var boundClick = this.onImageClick.bind(this, img);
        return <div className="item" style={this.state.imageItemStyles} onClick={boundClick}><Image onLoad={this.onImageLoad} src={img.link} alt={img.alt} styles={collageContainerStyles.img} widths={img.widths} widthMultiplier={this.state.widthMultiplier} /></div>;
      })}
    </div>;
  },
  componentDidMount: function() {
    var masonryContainer = this.refs.masonryContainer.getDOMNode();

    this.msnry = new Masonry(masonryContainer, {
      // Masonry options
    });
  },
  componentDidUpdate: function() {
    this.msnry.reloadItems();
  }
});
