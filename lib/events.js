import EventEmitter from 'events';

export var emitter = new EventEmitter();

emitter.setMaxListeners(100);
