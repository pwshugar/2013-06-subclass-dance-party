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
  var oldHeight = parseInt(this.$node.css("height")) || 0;
  var width = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
  var percent = width / 120;
  var height = Math.floor(160 * percent);
  var difHeight = 0;
  var tempTop = parseInt(this.$node.css('top'));
  // console.log("oldHeight: " + oldHeight);
  // console.log("new height: " + height);
  if (height > oldHeight){
    difHeight = height - oldHeight;
    this.$node.css('top', tempTop - difHeight + 'px');
  } else {
    difHeight = oldHeight - height;
    this.$node.css('top', tempTop + difHeight + 'px');
  }

  this.$node.css("width", width);
  this.$node.css("height", height);
};