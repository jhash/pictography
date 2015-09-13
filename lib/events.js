var isIE = /msie/gi.test(navigator.userAgent);

var INFINITE_SCROLL_DISTANCE = 50;

var infiniteScrollCallbacks = [];

var infiniteScroll = function(e) {
  for (var callback in infiniteScrollCallbacks) {
    callback(e);
  }
};

var infiniteScrollHandler = function(e) {
  var pageHeight = document.documentElement.scrollHeight;
  var clientHeight = document.documentElement.clientHeight;
  var scrollPos = isIE ? document.documentElement.scrollTop : window.pageYOffset;

  if (pageHeight - (scrollPos + clientHeight) < INFINITE_SCROLL_DISTANCE) {
    infiniteScroll();
  }
};

export var scrollEvents = {
  addInfiniteScrollListeners: function() {
    infiniteScrollCallbacks = infiniteScrollCallbacks.concat(Array.prototype.slice.call(arguments));
  },
  removeInfiniteScrollListeners: function() {
    infiniteScrollCallbacks = _.without(infiniteScrollCallbacks, Array.prototype.slice.call(arguments));
  },
  startListening: function() {
    document.body.addEventListener('scroll', infiniteScrollHandler);
  },
  stopListening: function() {
    document.body.removeEventListener('scroll', infiniteScrollHandler);
  }
};




