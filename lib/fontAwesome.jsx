import React from 'react';

export var FontAwesome = React.createClass({
  render: function() {
    return <span className={'fa ' + this.props.classes}></span>;
  }
});
