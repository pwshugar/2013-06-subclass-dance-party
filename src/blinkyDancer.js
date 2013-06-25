/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();

      // toggle() is a jQuery method to show/hide the <span> tag.
      // See http://api.jquery.com/category/effects/ for this and
      // other effects you can use on a jQuery-wrapped html tag. 
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};

makeBlinkyDancer = function(top, left, step){
  return new BlinkyDancer(top, left, step);
};

var inherit = function(proto) {
  function F() {}
  F.prototype = proto;
  return new F;
};

BlinkyDancer.prototype = inherit(Dancer.prototype);
// Our stuff below
*/


var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // call the old version of step at the beginning of any call to this new version of step
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
};


BlinkyDancer.prototype = new Dancer();
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
   // toggle() is a jQuery method to show/hide the <span> tag.
   // * See http://api.jquery.com/category/effects/ for this and
   // * other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};



// var ParentClass = function(){
//   console.log('who am i? ', this);
// }

// ParentClass.prototype.foo = function(){
//   console.log('this is the parent class functin foo');
// }

// ChildClass = function(){
//   ParentClass.call(this);
// }
// ChildClass.prototype = Object.create(ParentClass.prototype);

// var child = new ChildClass()
// child instanceof ChildClass // true
// child instanceof ParentClass // true