/* */ 
"format cjs";
(function(window, factory) {
  'use strict';
  if (typeof define == 'function' && define.amd) {
    define(['eventie/eventie', 'eventEmitter/EventEmitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(eventie, EventEmitter, getSize, utils, Item) {
      return factory(window, eventie, EventEmitter, getSize, utils, Item);
    });
  } else if (typeof exports == 'object') {
    module.exports = factory(window, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item"));
  } else {
    window.Outlayer = factory(window, window.eventie, window.EventEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
  }
}(window, function factory(window, eventie, EventEmitter, getSize, utils, Item) {
  'use strict';
  var console = window.console;
  var jQuery = window.jQuery;
  var noop = function() {};
  var GUID = 0;
  var instances = {};
  function Outlayer(element, options) {
    var queryElement = utils.getQueryElement(element);
    if (!queryElement) {
      if (console) {
        console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
      }
      return;
    }
    this.element = queryElement;
    if (jQuery) {
      this.$element = jQuery(this.element);
    }
    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options);
    var id = ++GUID;
    this.element.outlayerGUID = id;
    instances[id] = this;
    this._create();
    if (this.options.isInitLayout) {
      this.layout();
    }
  }
  Outlayer.namespace = 'outlayer';
  Outlayer.Item = Item;
  Outlayer.defaults = {
    containerStyle: {position: 'relative'},
    isInitLayout: true,
    isOriginLeft: true,
    isOriginTop: true,
    isResizeBound: true,
    isResizingContainer: true,
    transitionDuration: '0.4s',
    hiddenStyle: {
      opacity: 0,
      transform: 'scale(0.001)'
    },
    visibleStyle: {
      opacity: 1,
      transform: 'scale(1)'
    }
  };
  utils.extend(Outlayer.prototype, EventEmitter.prototype);
  Outlayer.prototype.option = function(opts) {
    utils.extend(this.options, opts);
  };
  Outlayer.prototype._create = function() {
    this.reloadItems();
    this.stamps = [];
    this.stamp(this.options.stamp);
    utils.extend(this.element.style, this.options.containerStyle);
    if (this.options.isResizeBound) {
      this.bindResize();
    }
  };
  Outlayer.prototype.reloadItems = function() {
    this.items = this._itemize(this.element.children);
  };
  Outlayer.prototype._itemize = function(elems) {
    var itemElems = this._filterFindItemElements(elems);
    var Item = this.constructor.Item;
    var items = [];
    for (var i = 0,
        len = itemElems.length; i < len; i++) {
      var elem = itemElems[i];
      var item = new Item(elem, this);
      items.push(item);
    }
    return items;
  };
  Outlayer.prototype._filterFindItemElements = function(elems) {
    return utils.filterFindElements(elems, this.options.itemSelector);
  };
  Outlayer.prototype.getItemElements = function() {
    var elems = [];
    for (var i = 0,
        len = this.items.length; i < len; i++) {
      elems.push(this.items[i].element);
    }
    return elems;
  };
  Outlayer.prototype.layout = function() {
    this._resetLayout();
    this._manageStamps();
    var isInstant = this.options.isLayoutInstant !== undefined ? this.options.isLayoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, isInstant);
    this._isLayoutInited = true;
  };
  Outlayer.prototype._init = Outlayer.prototype.layout;
  Outlayer.prototype._resetLayout = function() {
    this.getSize();
  };
  Outlayer.prototype.getSize = function() {
    this.size = getSize(this.element);
  };
  Outlayer.prototype._getMeasurement = function(measurement, size) {
    var option = this.options[measurement];
    var elem;
    if (!option) {
      this[measurement] = 0;
    } else {
      if (typeof option === 'string') {
        elem = this.element.querySelector(option);
      } else if (utils.isElement(option)) {
        elem = option;
      }
      this[measurement] = elem ? getSize(elem)[size] : option;
    }
  };
  Outlayer.prototype.layoutItems = function(items, isInstant) {
    items = this._getItemsForLayout(items);
    this._layoutItems(items, isInstant);
    this._postLayout();
  };
  Outlayer.prototype._getItemsForLayout = function(items) {
    var layoutItems = [];
    for (var i = 0,
        len = items.length; i < len; i++) {
      var item = items[i];
      if (!item.isIgnored) {
        layoutItems.push(item);
      }
    }
    return layoutItems;
  };
  Outlayer.prototype._layoutItems = function(items, isInstant) {
    this._emitCompleteOnItems('layout', items);
    if (!items || !items.length) {
      return;
    }
    var queue = [];
    for (var i = 0,
        len = items.length; i < len; i++) {
      var item = items[i];
      var position = this._getItemLayoutPosition(item);
      position.item = item;
      position.isInstant = isInstant || item.isLayoutInstant;
      queue.push(position);
    }
    this._processLayoutQueue(queue);
  };
  Outlayer.prototype._getItemLayoutPosition = function() {
    return {
      x: 0,
      y: 0
    };
  };
  Outlayer.prototype._processLayoutQueue = function(queue) {
    for (var i = 0,
        len = queue.length; i < len; i++) {
      var obj = queue[i];
      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant);
    }
  };
  Outlayer.prototype._positionItem = function(item, x, y, isInstant) {
    if (isInstant) {
      item.goTo(x, y);
    } else {
      item.moveTo(x, y);
    }
  };
  Outlayer.prototype._postLayout = function() {
    this.resizeContainer();
  };
  Outlayer.prototype.resizeContainer = function() {
    if (!this.options.isResizingContainer) {
      return;
    }
    var size = this._getContainerSize();
    if (size) {
      this._setContainerMeasure(size.width, true);
      this._setContainerMeasure(size.height, false);
    }
  };
  Outlayer.prototype._getContainerSize = noop;
  Outlayer.prototype._setContainerMeasure = function(measure, isWidth) {
    if (measure === undefined) {
      return;
    }
    var elemSize = this.size;
    if (elemSize.isBorderBox) {
      measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
    }
    measure = Math.max(measure, 0);
    this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
  };
  Outlayer.prototype._emitCompleteOnItems = function(eventName, items) {
    var _this = this;
    function onComplete() {
      _this.dispatchEvent(eventName + 'Complete', null, [items]);
    }
    var count = items.length;
    if (!items || !count) {
      onComplete();
      return;
    }
    var doneCount = 0;
    function tick() {
      doneCount++;
      if (doneCount === count) {
        onComplete();
      }
    }
    for (var i = 0,
        len = items.length; i < len; i++) {
      var item = items[i];
      item.once(eventName, tick);
    }
  };
  Outlayer.prototype.dispatchEvent = function(type, event, args) {
    var emitArgs = event ? [event].concat(args) : args;
    this.emitEvent(type, emitArgs);
    if (jQuery) {
      this.$element = this.$element || jQuery(this.element);
      if (event) {
        var $event = jQuery.Event(event);
        $event.type = type;
        this.$element.trigger($event, args);
      } else {
        this.$element.trigger(type, args);
      }
    }
  };
  Outlayer.prototype.ignore = function(elem) {
    var item = this.getItem(elem);
    if (item) {
      item.isIgnored = true;
    }
  };
  Outlayer.prototype.unignore = function(elem) {
    var item = this.getItem(elem);
    if (item) {
      delete item.isIgnored;
    }
  };
  Outlayer.prototype.stamp = function(elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }
    this.stamps = this.stamps.concat(elems);
    for (var i = 0,
        len = elems.length; i < len; i++) {
      var elem = elems[i];
      this.ignore(elem);
    }
  };
  Outlayer.prototype.unstamp = function(elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }
    for (var i = 0,
        len = elems.length; i < len; i++) {
      var elem = elems[i];
      utils.removeFrom(this.stamps, elem);
      this.unignore(elem);
    }
  };
  Outlayer.prototype._find = function(elems) {
    if (!elems) {
      return;
    }
    if (typeof elems === 'string') {
      elems = this.element.querySelectorAll(elems);
    }
    elems = utils.makeArray(elems);
    return elems;
  };
  Outlayer.prototype._manageStamps = function() {
    if (!this.stamps || !this.stamps.length) {
      return;
    }
    this._getBoundingRect();
    for (var i = 0,
        len = this.stamps.length; i < len; i++) {
      var stamp = this.stamps[i];
      this._manageStamp(stamp);
    }
  };
  Outlayer.prototype._getBoundingRect = function() {
    var boundingRect = this.element.getBoundingClientRect();
    var size = this.size;
    this._boundingRect = {
      left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
      top: boundingRect.top + size.paddingTop + size.borderTopWidth,
      right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
      bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
    };
  };
  Outlayer.prototype._manageStamp = noop;
  Outlayer.prototype._getElementOffset = function(elem) {
    var boundingRect = elem.getBoundingClientRect();
    var thisRect = this._boundingRect;
    var size = getSize(elem);
    var offset = {
      left: boundingRect.left - thisRect.left - size.marginLeft,
      top: boundingRect.top - thisRect.top - size.marginTop,
      right: thisRect.right - boundingRect.right - size.marginRight,
      bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
    };
    return offset;
  };
  Outlayer.prototype.handleEvent = function(event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };
  Outlayer.prototype.bindResize = function() {
    if (this.isResizeBound) {
      return;
    }
    eventie.bind(window, 'resize', this);
    this.isResizeBound = true;
  };
  Outlayer.prototype.unbindResize = function() {
    if (this.isResizeBound) {
      eventie.unbind(window, 'resize', this);
    }
    this.isResizeBound = false;
  };
  Outlayer.prototype.onresize = function() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    var _this = this;
    function delayed() {
      _this.resize();
      delete _this.resizeTimeout;
    }
    this.resizeTimeout = setTimeout(delayed, 100);
  };
  Outlayer.prototype.resize = function() {
    if (!this.isResizeBound || !this.needsResizeLayout()) {
      return;
    }
    this.layout();
  };
  Outlayer.prototype.needsResizeLayout = function() {
    var size = getSize(this.element);
    var hasSizes = this.size && size;
    return hasSizes && size.innerWidth !== this.size.innerWidth;
  };
  Outlayer.prototype.addItems = function(elems) {
    var items = this._itemize(elems);
    if (items.length) {
      this.items = this.items.concat(items);
    }
    return items;
  };
  Outlayer.prototype.appended = function(elems) {
    var items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    this.layoutItems(items, true);
    this.reveal(items);
  };
  Outlayer.prototype.prepended = function(elems) {
    var items = this._itemize(elems);
    if (!items.length) {
      return;
    }
    var previousItems = this.items.slice(0);
    this.items = items.concat(previousItems);
    this._resetLayout();
    this._manageStamps();
    this.layoutItems(items, true);
    this.reveal(items);
    this.layoutItems(previousItems);
  };
  Outlayer.prototype.reveal = function(items) {
    this._emitCompleteOnItems('reveal', items);
    var len = items && items.length;
    for (var i = 0; len && i < len; i++) {
      var item = items[i];
      item.reveal();
    }
  };
  Outlayer.prototype.hide = function(items) {
    this._emitCompleteOnItems('hide', items);
    var len = items && items.length;
    for (var i = 0; len && i < len; i++) {
      var item = items[i];
      item.hide();
    }
  };
  Outlayer.prototype.revealItemElements = function(elems) {
    var items = this.getItems(elems);
    this.reveal(items);
  };
  Outlayer.prototype.hideItemElements = function(elems) {
    var items = this.getItems(elems);
    this.hide(items);
  };
  Outlayer.prototype.getItem = function(elem) {
    for (var i = 0,
        len = this.items.length; i < len; i++) {
      var item = this.items[i];
      if (item.element === elem) {
        return item;
      }
    }
  };
  Outlayer.prototype.getItems = function(elems) {
    elems = utils.makeArray(elems);
    var items = [];
    for (var i = 0,
        len = elems.length; i < len; i++) {
      var elem = elems[i];
      var item = this.getItem(elem);
      if (item) {
        items.push(item);
      }
    }
    return items;
  };
  Outlayer.prototype.remove = function(elems) {
    var removeItems = this.getItems(elems);
    this._emitCompleteOnItems('remove', removeItems);
    if (!removeItems || !removeItems.length) {
      return;
    }
    for (var i = 0,
        len = removeItems.length; i < len; i++) {
      var item = removeItems[i];
      item.remove();
      utils.removeFrom(this.items, item);
    }
  };
  Outlayer.prototype.destroy = function() {
    var style = this.element.style;
    style.height = '';
    style.position = '';
    style.width = '';
    for (var i = 0,
        len = this.items.length; i < len; i++) {
      var item = this.items[i];
      item.destroy();
    }
    this.unbindResize();
    var id = this.element.outlayerGUID;
    delete instances[id];
    delete this.element.outlayerGUID;
    if (jQuery) {
      jQuery.removeData(this.element, this.constructor.namespace);
    }
  };
  Outlayer.data = function(elem) {
    elem = utils.getQueryElement(elem);
    var id = elem && elem.outlayerGUID;
    return id && instances[id];
  };
  Outlayer.create = function(namespace, options) {
    function Layout() {
      Outlayer.apply(this, arguments);
    }
    if (Object.create) {
      Layout.prototype = Object.create(Outlayer.prototype);
    } else {
      utils.extend(Layout.prototype, Outlayer.prototype);
    }
    Layout.prototype.constructor = Layout;
    Layout.defaults = utils.extend({}, Outlayer.defaults);
    utils.extend(Layout.defaults, options);
    Layout.prototype.settings = {};
    Layout.namespace = namespace;
    Layout.data = Outlayer.data;
    Layout.Item = function LayoutItem() {
      Item.apply(this, arguments);
    };
    Layout.Item.prototype = new Item();
    utils.htmlInit(Layout, namespace);
    if (jQuery && jQuery.bridget) {
      jQuery.bridget(namespace, Layout);
    }
    return Layout;
  };
  Outlayer.Item = Item;
  return Outlayer;
}));
