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
