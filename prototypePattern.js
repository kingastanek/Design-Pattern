/* The Prototype Pattern creates new objects, but rather than creating non-initialized objects 
it returns objects that are initialized with values it copied from a prototype - or sample - object.
The Prototype pattern is also referred to as the Properties pattern. */

var AudiModel = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Audi';
  this.make         = 'A7';
}

AudiModel.prototype = function() {
  var go = function() {
    console.log("go");
  };
  var stop = function() {
    console.log("stop");
  };

  return {
    pressBrakePedal: stop,
    pressGasPedal: go
  }
}();
