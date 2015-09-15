import _ from 'lodash';
import React from 'react';
import lazyload from 'lazyload';
import picturefill from 'picturefill';

export var Image = React.createClass({
  imageError: function() {
    if (!this.state.sourceReset) {
      this.setState({ sourceReset: true });
      this.refs.lazyLoadingImage.getDOMNode().src = this.props.src;
    }
  },
  imageLoader: function() {
    if (_.isFunction(this.props.onLoad)) {
      this.props.onLoad();
    }
    lzld(this.refs.lazyLoadingImage.getDOMNode());
    picturefill({
      elements: [ this.refs.lazyLoadingImage.getDOMNode() ]
    });
  },
  getInitialState: function() {
    return {
      sourceReset: false
    };
  },
  render: function() {
    return <picture>
      { !this.state.sourceReset ? (this.props.widths || []).map((width) => {
        var dotIndex = this.props.src.lastIndexOf('.');
        var fileName = this.props.src.slice(0, dotIndex) + '-';
        var fileType = this.props.src.slice(dotIndex);

        return <source srcSet={fileName + width + fileType} media={'(min-width: ' + (width * (this.props.widthMultiplier || 1) - (this.props.widthLeeWay || 200)) + 'px)'}/>
      }) : null}
      <img ref='lazyLoadingImage' onError={this.imageError} onLoad={this.imageLoader} style={Object.assign({}, this.props.styles)} alt={this.props.alt} width={this.props.width} height={this.props.height} srcSet={this.props.src} />
    </picture>;
  }
});
