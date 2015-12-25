var Gpio = require('onoff').Gpio;
var r1 = new Gpio(14, 'out');

function exit() {
  r1.unexport();
  process.exit();
}

r1.writeSync(0);
console.log('antes setInterval');
var iv = setInterval(function () {
  console.log('r1 ' + JSON.stringify(r1.readSync()));
  r1.writeSync(r1.readSync() ^ 1)
}, 5000);

console.log('interval = ' + iv);

// Stop blinking the relay and turn it off after 5 seconds.
setTimeout(function () {
  clearInterval(iv); // Stop blinking
  r1.writeSync(0);  // Turn r1 off.
  r1.unexport();    // Unexport GPIO and free resources
}, 15000);

