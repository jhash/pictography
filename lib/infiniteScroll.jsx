import _ from 'lodash';
import React from 'react';

var INFINITE_SCROLL_DISTANCE = 200;

var elementHeight = function(element) {
  return element.clientHeight || element.offsetHeight;
};

export var InfiniteScroll = React.createClass({
  onScroll: function() {
    var container = this.refs.scrollContainer.getDOMNode();
    var list = this.refs.scrollingList.getDOMNode();

    var listHeight = elementHeight(list);
    var containerHeight = elementHeight(container);
    var scrollPos = container.scrollTop;

    if (listHeight - (scrollPos + containerHeight) < (this.props.scrollDistance || INFINITE_SCROLL_DISTANCE)) {
      if (_.isFunction(this.props.loadMore)) {
        this.props.loadMore();
      }
    }
  },
  render: function() {
    return <div ref='scrollContainer' className='scroll-container'><div ref='scrollingList'>{ this.props.children }</div></div>;
  },
  componentDidMount: function() {
    this.refs.scrollContainer.getDOMNode().addEventListener('scroll', this.onScroll);
  }
});
