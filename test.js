var Relay = require('./lib/relay');
var r1 = new Relay(14);

r1.off();
console.log('antes setInterval');
var iv = setInterval(function () {
  var newStatus = r1.readSync() ^ 1;
  console.log('r1 ' + newStatus);

  if (newStatus == 1) {
    r1.on();
  } else {
    r1.off();
  }
}, 5000);

console.log('interval = ' + iv);

// Stop blinking the relay and turn it off after 5 seconds.
setTimeout(function () {
  clearInterval(iv); // Stop blinking
  r1.destroy();
}, 15000);
