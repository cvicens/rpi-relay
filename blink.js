"use strict";

var Gpio = require('onoff').Gpio, // Constructor function for Gpio objects.
  r1 = new Gpio(14, 'out'),         // Export GPIO #14 as an output.
  r2 = new Gpio(4, 'out'),
  iv;

// Toggle the state of the LED on GPIO #14 every 200ms.
// Here synchronous methods are used. Asynchronous methods are also available.
iv = setInterval(function () {
  r1.writeSync(r1.readSync() ^ 1); // 1 = on, 0 = off :)
  r2.writeSync(r1.readSync() ^ 1);
}, 200);

// Stop blinking the LED and turn it off after 5 seconds.
setTimeout(function () {
  clearInterval(iv); // Stop blinking
  r1.writeSync(0);  // Turn LED off.
  r2.writeSync(0);  // Turn LED off.
  r1.unexport();    // Unexport GPIO and free resources
  r2.unexport();    // Unexport GPIO and free resources
}, 5000);
