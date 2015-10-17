import _ from 'lodash';
import React from 'react';
import Masonry from 'masonry-layout';
import {Image} from './image.jsx!';
import {emitter} from './events';

var
collageContainerStyles = {
  img: {
    width: '100%',
    padding: '0px 0px 0px 5px;',
    boxSizing: 'border-box'
  }
};

export var Collage = React.createClass({
  displayName: 'Collage',
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
  },
  onImageLoad: function() {
    this.msnry.layout();
  },
  getInitialState: function() {
    return this.getImageState();
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.onResize);
  },
  componentWillMount: function() {
    window.addEventListener('resize', this.onResize);
  },
  render: function() {
    return <div ref="masonryContainer" className="collage-container">
      {this.props.imgs.map((img) => {
        var boundClick = this.onImageClick.bind(this, img);
        return <a className="item" style={this.state.imageItemStyles} onClick={boundClick}><Image onLoad={this.onImageLoad} src={img.link} alt={img.alt} styles={collageContainerStyles.img} widths={img.widths} widthMultiplier={this.state.widthMultiplier} /></a>;
      })}
    </div>;
  },
  componentDidMount: function() {
    var masonryContainer = this.refs.masonryContainer.getDOMNode();

    this.msnry = new Masonry(masonryContainer, {
      // Masonry options
      isInitLayout: false,
      transitionDuration: '0.1s',
      percentPosition: true
    });
  },
  componentDidUpdate: function() {
    this.msnry.reloadItems();
  }
});
