import _ from 'lodash';
import React from 'react';
import lazyload from 'lazyload';

export var Image = React.createClass({
  imageLoader: function() {
    if (_.isFunction(this.props.onLoad)) {
      this.props.onLoad();
    }
    lzld(this.refs.lazyLoadingImage.getDOMNode());
  },
  render: function() {
    return <img ref='lazyLoadingImage' onLoad={this.imageLoader} style={Object.assign({}, this.props.styles)} data-src={this.props.src} alt={this.props.src} width={this.props.width} height={this.props.height} src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />;
  }
});
