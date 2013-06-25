describe("blinkyDancer", function() {
  var blinkyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    // blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    window.dancers = [];
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that makes its node blink", function() {
    spyOn(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle).toHaveBeenCalled();
  });
/*
  describe("dance", function(){

    it("should call step periodically", function(){
      spyOn(blinkyDancer, "step").andCallThrough();
      // for crazy reasons, we need to let some time pass
      // specifically, the spied-upon step function will not be called the first time around
      jasmine.Clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).toBe(0);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).toBe(1);

      jasmine.Clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).toBe(2);
    });

  });
*/
  it("should line up the dancers when clicking 'Line Up!", function() {
    blinkyDancer.step(timeBetweenSteps);
    dancers.push(blinkyDancer);
    lineUp(window.dancers);
    expect(dancers[0].$node[0].style['left']).toEqual('10px');
  });
});