'use strict';

const EventEmitter = require('events').EventEmitter,
  inherits = require('util').inherits;

const Clock = function () {
  const self = this;

  setInterval(() => {
    self.emit('tictac');
  }, 1000);
};

inherits(Clock, EventEmitter);

Clock.prototype.theTime = function () {
  const date = new Date(),
    hrs = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    msg = hrs + ':' + min + ':' + sec;

  console.log(msg);
};

const cucu = new Clock();

cucu.on('tictac', function () {
  cucu.theTime();
});
