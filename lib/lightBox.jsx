import _ from 'lodash';
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
  onImageLoad: _.debounce(function() {
    if (this.state.wasTooWide || !this.refs.image || !this.refs.lightBoxContainer) {
      this.setState({ wasTooWide: false });
      return;
    }

    var tooWide = this.refs.image.getDOMNode().offsetWidth > this.refs.lightBoxContainer.getDOMNode().offsetWidth;

    this.setState({
      wasTooWide: tooWide,
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
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.onImageLoad);
  },
  render: function() {
    var lightBoxContainer = (<div ref='lightBoxContainer' className='light-box' onClick={this.onClick}>
      <Image ref='image' onLoad={this.onImageLoad} src={this.props.img.link} alt={this.props.img.alt} styles={this.state.imageStyles} widths={this.props.img.widths} />
      { this.state.loading ? <div ref='spinner' className='spinner'></div> : null }
    </div>);

    window.addEventListener('resize', this.onImageLoad);

    return lightBoxContainer;
  }
});
