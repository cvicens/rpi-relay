var Gpio = require('onoff').Gpio;
var relay1 = new Gpio(2, 'out');
var relay2 = new Gpio(3, 'out');

relay1.writeSync(true);
console.log('antes setInterval');
var interval = setInterval(function () {
  console.log('r1 ' + relay.readSync());
  relay1.writeSync(relay1.readSync() ^ 1)
}, 5000);

console.log('interval = ' + interval);

process.on('SIGINT', process.exit(0));
