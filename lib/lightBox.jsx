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
  verticalCenter: {
   position: 'absolute',
   top: 'calc(50% - 117px)',
   left: '0',
   right: '0',
   textAlign: 'center'
  }
};

export var LightBox = React.createClass({
  displayName: 'LightBox',
  getInitialState: function() {
    return {
      loading: true,
      imageStyles: {
        height: '100%',
        width: 'auto'
      }
    };
  },
  onImageLoad: function() {
    var tooBig = this.refs.image.getDOMNode().offsetWidth > this.refs.lightBoxContainer.getDOMNode().offsetWidth;

    this.setState({
      loading: false,
      imageStyles: {
        height: tooBig ? 'auto' : '100%',
        width: tooBig ? '100%' : 'auto'
      }
    });
  },
  onClick: function() {
    this.props.closeLightBox();
  },
  render: function() {
    return <div ref='lightBoxContainer' className='lightbox-container' style={lightBoxStyles.lightBox} onClick={this.onClick}>
      <Image ref='image' onLoad={this.onImageLoad} src={this.props.img.link} alt={this.props.img.alt} styles={this.state.imageStyles} widths={this.props.img.widths} />
      { this.state.loading ? <div ref='spinner' className='spinner' style={lightBoxStyles.verticalCenter}></div> : null }
    </div>;
  }
});
