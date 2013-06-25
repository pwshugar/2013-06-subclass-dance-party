var MarioDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // call the old version of step at the beginning of any call to this new version of step
  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
   this.$node = $('<img src="img/Mario8bitSprite.png" class="dancer mario" style="width: 120px; height: 160px;">');
   this.$node.css('border', 0);
   this.setPosition(top, left);
};


MarioDancer.prototype = new Dancer();
MarioDancer.prototype.constructor = MarioDancer;

MarioDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
   // toggle() is a jQuery method to show/hide the <span> tag.
   // * See http://api.jquery.com/category/effects/ for this and
   // * other effects you can use on a jQuery-wrapped html tag. 
  // this.$node.toggle();

  // if (this.$node.css("border-color") === "rgb(0, 0, 255)") {
  //   this.$node.css("border-color", "green");
  // } else {
  //   this.$node.css("border-color", "blue");
  // }
  // var randomColor1 = Math.floor(Math.random() * 160);
  // var randomColor2 = Math.floor(Math.random() * 255);
  // var randomColor3 = Math.floor(Math.random() * 255);
  // var randomColor4 = Math.floor(Math.random() * 180);
  // this.$node.css("border-color", "rgb(" + randomColor1 + ", " + randomColor2 + ", " + randomColor3 + ")");
  // this.$node.css("-webkit-transform", "rotate(" + randomColor4 + "deg)");
  var width = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
  var percent = width / 120;
  var height = Math.floor(160 * percent);

  this.$node.css("width", width);
  this.$node.css("height", height);
};