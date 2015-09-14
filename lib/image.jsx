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
    return <picture>
      {(this.props.widths || []).map((width) => {
        var dotIndex = this.props.src.lastIndexOf('.');
        var fileName = this.props.src.slice(0, dotIndex) + '-';
        var fileType = this.props.src.slice(dotIndex);

        return <source srcSet={fileName + width + fileType} media={'(min-width: ' + width + 'px)'}/>
      })}
      <img ref='lazyLoadingImage' onLoad={this.imageLoader} style={Object.assign({}, this.props.styles)} alt={this.props.alt} width={this.props.width} height={this.props.height} srcSet={this.props.src} />
    </picture>;

    // <img ref='lazyLoadingImage' onLoad={this.imageLoader} style={Object.assign({}, this.props.styles)} data-src={this.props.src} alt={this.props.alt} width={this.props.width} height={this.props.height} src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />;
  }
});
