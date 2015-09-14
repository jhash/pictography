import React from 'react';
import Masonry from 'masonry-layout';
import {Image} from './image.jsx!';
import {emitter} from './events';

var lightBoxStyles = {
  display: 'none'
};

export var LightBox = React.createClass({
  displayName: 'LightBox',
  render: function() {
    return <div ref="lightBoxContainer" className="lightbox-container" style={lightBoxStyles}>
      <Image src={img.link} alt={img.alt} styles={collageContainerStyles.img} widths={img.widths} />
    </div>;
  }
});
