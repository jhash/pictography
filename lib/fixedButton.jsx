import _ from 'lodash';
import React from 'react';

export var FixedButton = React.createClass({
  containsPosition: function(position) {
    return this.props.position && this.props.position.toLowerCase().indexOf(position) !== -1;
  },
  render: function() {
    var fixedButtonClass = { position: 'absolute' };
    _.each(['top', 'bottom', 'left', 'right'], (position) => {
      if (this.containsPosition(position)) {
        fixedButtonClass[position] = (_.isUndefined(this.props[position + 'Spacing']) ? 0 : this.props[position + 'Spacing']) + 'px';
      }
    });
    return <a onTouchEnd={this.props.onClick} onClick={this.props.onClick} className={this.props.classes} style={fixedButtonClass}>{ this.props.children }</a>;
  }
});
