var newSetPosition = function(top, element){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  var styleSettings = {
    top: top,
    left: '10px'
  };
  element.$node.css(styleSettings);
};

var lineUp = function(array){
  var top = 0;
  for (var i = 0; i < array.length; i++){
    top = top + 25;
    newSetPosition(top, array[i]);
  }
};
