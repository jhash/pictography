import _ from 'lodash';
import React from 'react';
import Masonry from 'masonry-layout';
import {Image} from './image.jsx!';
import {emitter} from './events';
import {FontAwesome} from './fontAwesome.jsx!';
import {FixedButton} from './fixedButton.jsx!';

export var LightBox = React.createClass({
  displayName: 'LightBox',
  componentWillReceiveProps: function() {
    this.setState(this.getInitialState());
  },
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
  onImageLoad: _.throttle(function() {
    var tooWide = this.refs.image.getDOMNode().offsetWidth > this.refs.lightBoxContainer.getDOMNode().offsetWidth;
    this.setState({
      loading: false,
      imageStyles: {
        height: tooWide ? 'auto' : '100%',
        width: tooWide ? '100%' : 'auto'
      }
    });
  }, 100),
  onClick: function() {
    this.props.closeLightBox();
  },
  onResize: function() {
    this.setState(this.getInitialState());
    this.onImageLoad();
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.onResize);
  },
  componentWillMount: function() {
    window.addEventListener('resize', this.onResize);
  },
  render: function() {
    return (<div ref='lightBoxContainer' className='light-box' onClick={this.onClick}>
      <FixedButton bottomSpacing={140} topSpacing={140} classes={'full-height-button full-height-button-left'} position={'topBottomLeft'}><FontAwesome classes={'fa-chevron-left'} /></FixedButton>
      <FixedButton classes={'close-button'} position={'topLeft'}><FontAwesome classes={'fa-times'} /></FixedButton>
      <FixedButton bottomSpacing={140} topSpacing={140} classes={'full-height-button full-height-button-right'} position={'topBottomRight'}><FontAwesome classes={'fa-chevron-right'} /></FixedButton>
      <Image ref='image' onLoad={this.onImageLoad} src={this.props.img.link} alt={this.props.img.alt} styles={this.state.imageStyles} widths={this.props.img.widths} />
      { this.state.loading ? <div ref='spinner' className='spinner'></div> : null }
    </div>);
  }
});
