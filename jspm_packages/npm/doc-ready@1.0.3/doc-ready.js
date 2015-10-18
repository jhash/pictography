/* */ 
"format cjs";
(function(process) {
  (function(window) {
    'use strict';
    var document = window.document;
    var queue = [];
    function docReady(fn) {
      if (typeof fn !== 'function') {
        return;
      }
      if (docReady.isReady) {
        fn();
      } else {
        queue.push(fn);
      }
    }
    docReady.isReady = false;
    function init(event) {
      var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
      if (docReady.isReady || isIE8NotReady) {
        return;
      }
      docReady.isReady = true;
      for (var i = 0,
          len = queue.length; i < len; i++) {
        var fn = queue[i];
        fn();
      }
    }
    function defineDocReady(eventie) {
      eventie.bind(document, 'DOMContentLoaded', init);
      eventie.bind(document, 'readystatechange', init);
      eventie.bind(window, 'load', init);
      return docReady;
    }
    if (typeof define === 'function' && define.amd) {
      docReady.isReady = typeof requirejs === 'function';
      define(['eventie/eventie'], defineDocReady);
    } else if (typeof exports === 'object') {
      module.exports = defineDocReady(require("eventie"));
    } else {
      window.docReady = defineDocReady(window.eventie);
    }
  })(window);
})(require("process"));
