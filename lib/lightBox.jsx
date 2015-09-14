import React from 'react';
import Masonry from 'masonry-layout';
import {Image} from './image.jsx!';
import {emitter} from './events';

var lightBoxStyles = {
  lightBox: {
    backgroundColor: 'black',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    zIndex: '100',
    textAlign: 'center'
  },
  img: {
    height: '100%'
  }
};

export var LightBox = React.createClass({
  displayName: 'LightBox',
  onClick: function() {
    this.props.closeLightBox();
  },
  render: function() {
    return <div ref="lightBoxContainer" className="lightbox-container" style={lightBoxStyles.lightBox} onClick={this.onClick}>
      <Image src={this.props.img.link} alt={this.props.img.alt} styles={lightBoxStyles.img} widths={this.props.img.widths} />
    </div>;
  }
});
