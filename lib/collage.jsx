import React from 'react';
import Masonry from 'masonry-layout';
import {Image} from './image.jsx!';
import {emitter} from './events';

var collageContainerStyles = {
  imageItem: {
    width: '25%',
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
  onImageLoad: function() {
    this.msnry.layout();
  },
  render: function() {
    return <div ref="masonryContainer" className="collage-container" style={collageContainerStyles}>
      {this.props.imgs.map((img) => {
        return <div className="item" style={collageContainerStyles.imageItem}><Image className="" onLoad={this.onImageLoad} src={img.link} alt={img.alt} styles={collageContainerStyles.img} /></div>;
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
