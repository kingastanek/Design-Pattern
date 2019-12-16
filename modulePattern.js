/* The Module Pattern is a construct somewhat similar to a singleton class.
It has only one instance and exposes its members, but it doesn’t have any kind of internal state. 
Module is created as an IIFE (Immediately Invoked Function Expression) with a function inside. */

var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();
Exposer.second();
Exposer.methodToExpose;