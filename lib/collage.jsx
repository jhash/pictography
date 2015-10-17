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
  onResize: function() {

  },
  getWidthMultiplier: function() {
    if (window.outerWidth > 900) {
      return 3;
    } else if (window.outerWidth > 600) {
      return 2;
    } else {
      return 1;
    }
  },
  onItemClick: function(img) {
    if (_.isFunction(this.props.openLightBox)) {
      this.props.openLightBox(img);
    }
  },
  onImageLoad: function() {
    this.msnry.layout();
  },
  getInitialState: function() {
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
  render: function() {
    window.addEventListener('resize', this.onImageLoad);

    return <div ref="masonryContainer" className="collage-container">
      {this.props.imgs.map((img) => {
        var boundClick = this.onItemClick.bind(this, img);
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
