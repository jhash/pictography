import _ from 'lodash';
import EventEmitter from 'events';

var isIE = /msie/gi.test(navigator.userAgent);

var INFINITE_SCROLL_DISTANCE = 200;

var infiniteScrollHandler = function(e) {
  var pageHeight = document.documentElement.scrollHeight;
  var clientHeight = document.documentElement.clientHeight;
  var scrollPos = isIE ? document.documentElement.scrollTop : window.pageYOffset;

  if (pageHeight - (scrollPos + clientHeight) < INFINITE_SCROLL_DISTANCE) {
    emitter.emit('infiniteScroll');
  }
};

export var events = {
  startListening: function() {
    document.body.addEventListener('scroll', infiniteScrollHandler);
  },
  stopListening: function() {
    document.body.removeEventListener('scroll', infiniteScrollHandler);
  }
};

export var emitter = new EventEmitter();



