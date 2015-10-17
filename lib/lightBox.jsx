import _ from 'lodash';
import React from 'react';
import Masonry from 'masonry-layout';
import {Image} from './image.jsx!';
import {emitter} from './events';
import {FontAwesome} from './fontAwesome.jsx!';
import {FixedButton} from './fixedButton.jsx!';

export var LightBox = React.createClass({
  displayName: 'LightBox',
  componentWillReceiveProps: function(newProps) {
    if (newProps.img !== this.props.img) this.setState({ loading: true });
  },
  adjustImageStyle: function() {
    var imageDOMNode = this.refs.image.getDOMNode().lastChild;
    var lightBoxDOMNode = this.refs.lightBoxContainer.getDOMNode();
    var tooWide = imageDOMNode.offsetWidth > lightBoxDOMNode.offsetWidth;
    var tooTall = imageDOMNode.offsetHeight > lightBoxDOMNode.offsetHeight;

    if (!tooWide && !tooTall) return;

    this.setState({
      imageStyles: {
        height: tooWide ? 'auto' : '100%',
        width: tooWide ? '100%' : 'auto'
      }
    });
  },
  onImageLoad: function() {
    this.setState({ loading: false });
    this.adjustImageStyle();
  },
  onResize: _.throttle(function() {
    this.adjustImageStyle();
  }, 100),
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.onResize);
  },
  componentWillMount: function() {
    window.addEventListener('resize', this.onResize);
    document.ontouchstart = function(e) { console.log(e); return true; };
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
  render: function() {
    return (<div ref='lightBoxContainer' className='light-box'>
      <FixedButton onClick={this.props.previousImage} bottomSpacing={140} topSpacing={140} classes={'full-height-button full-height-button-left no-select'} position={'topBottomLeft'}><FontAwesome classes={'fa-chevron-left'} /></FixedButton>
      <FixedButton onClick={this.props.closeLightBox} classes={'close-button'} position={'topLeft'}><FontAwesome classes={'fa-times no-select'} /></FixedButton>
      <FixedButton onClick={this.props.nextImage} bottomSpacing={140} topSpacing={140} classes={'full-height-button full-height-button-right no-select'} position={'topBottomRight'}><FontAwesome classes={'fa-chevron-right'} /></FixedButton>
      <Image ref='image' onLoad={this.onImageLoad} src={this.props.img.link} alt={this.props.img.alt} styles={this.state.imageStyles} widths={this.props.img.widths} />
      { this.state.loading ? <div ref='spinner' className='spinner'></div> : null }
    </div>);
  }
});
