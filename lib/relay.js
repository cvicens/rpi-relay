'use strict'
var Gpio = require('onoff').Gpio;
//var r1 = new Gpio(14, 'out');

var NOT_INIT = 'Module Relay not init';

function Relay (io_number) {
  var self = this;

  self.relay = new Gpio(io_number, 'out');
}

Relay.prototype.checkInit = function () {
  var self = this;
  if (!self.relay) {
    throw NOT_INIT;
  }
}

Relay.prototype.on = function () {
  var self = this;
  self.checkInit();

  self.relay.writeSync(1);
};

Relay.prototype.off = function () {
  var self = this;
  self.checkInit();

  self.relay.writeSync(0);
};

Relay.prototype.readSync = function () {
  var self = this;
  self.checkInit();

  return self.relay.readSync();
};

Relay.prototype.destroy = function() {
  var self = this;
  self.checkInit();

  self.off();
  self.relay.unexport();
  self.relay = null;
}

module.exports = Relay;
