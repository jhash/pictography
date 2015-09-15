import React from 'react';
import Masonry from 'masonry-layout';
import {Image} from './image.jsx!';
import {emitter} from './events';

export var LightBox = React.createClass({
  displayName: 'LightBox',
  getInitialState: function() {
    return {
      loading: true,
      imageStyles: {
        height: '100%',
        width: 'auto',
        verticalAlign: 'middle',
        display: 'inline-block'
      }
    };
  },
  onImageLoad: function() {
    var tooWide = this.refs.image.getDOMNode().offsetWidth > this.refs.lightBoxContainer.getDOMNode().offsetWidth;

    this.setState({
      loading: false,
      imageStyles: {
        height: tooWide ? 'auto' : '100%',
        width: tooWide ? '100%' : 'auto'
      }
    });

    window.addEventListener('resize', this.onImageLoad);
  },
  onClick: function() {
    this.props.closeLightBox();
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.onImageLoad);
  },
  render: function() {
    return <div ref='lightBoxContainer' className='light-box' onClick={this.onClick}>
      <Image ref='image' onLoad={this.onImageLoad} src={this.props.img.link} alt={this.props.img.alt} styles={this.state.imageStyles} widths={this.props.img.widths} />
      { this.state.loading ? <div ref='spinner' className='spinner'></div> : null }
    </div>;
  }
});
