import React from 'react';
import Masonry from 'masonry-layout';
import {Image} from './image.jsx!';
import {scrollEvents} from './events';

var collageContainerStyles = {
  position: 'relative',
  width: '100%',
  background: '#f8f8f8',
  imageItem: {
    width: '25%',
    margin: '0',
    padding: '0',
    img: {
      width: '100%',
      padding: '5px',
      boxSizing: 'border-box'
    }
  }
};

export var Collage = React.createClass({
  displayName: 'Collage',
  onInfiniteScroll: function() {
    // DEBUG
    console.log("this:", this);
  },
  onImageLoad: function() {
    this.msnry.layout();
  },
  render: function() {
    scrollEvents.addInfiniteScrollListeners(this.onInfiniteScroll);
    return <div ref="masonryContainer" className="collage-container" style={collageContainerStyles}>
      {this.props.imgs.map((img) => {
        return <div className="item" style={collageContainerStyles.imageItem}><Image className="" onLoad={this.onImageLoad} src={img.link} alt={img.alt} styles={collageContainerStyles.imageItem.img} /></div>;
      })}
    </div>;
  },
  componentDidMount: function() {
    var masonryContainer = this.refs.masonryContainer.getDOMNode();

    this.msnry = new Masonry(masonryContainer, {
      // Masonry options
    });
  }
});
