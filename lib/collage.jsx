import _ from 'lodash';
import React from 'react';
import Masonry from 'masonry-layout';
import {Image} from './image.jsx!';
import {emitter} from './events';

var collageContainerStyles = {
  imageItem: {
    width: '33%',
    margin: '0',
    padding: '0',
  },
  img: {
    width: '100%',
    padding: '5px',
    boxSizing: 'border-box'
  }
};

export var Collage = React.createClass({
  displayName: 'Collage',
  onItemClick: function(img) {
    if (_.isFunction(this.props.openLightBox)) {
      this.props.openLightBox(img);
    }
  },
  onImageLoad: function() {
    this.msnry.layout();
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return <div ref="masonryContainer" className="collage-container" style={collageContainerStyles}>
      {this.props.imgs.map((img) => {
        var boundClick = this.onItemClick.bind(this, img);
        return <div className="item" style={collageContainerStyles.imageItem} onClick={boundClick}><Image onLoad={this.onImageLoad} src={img.link} alt={img.alt} styles={collageContainerStyles.img} widths={img.widths} widthMultiplier={3} /></div>;
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
