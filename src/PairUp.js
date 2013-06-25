var pairUp = function(arr){
  var newArr = [], pairs =[];
  for(var i = 0; i < arr.length; i++){
    newArr.push(arr[i]);
  }
  while(newArr.length > 1) {
    pairs.push(hypotenuse(newArr));
  }
  for(var j = 0; j < pairs.length; j++) {
    partners(pairs[j]);
  }
};

var hypotenuse = function(arr){
  newArr.splice(x,1);
  newArr.splice(y,1);
  return [x, y];
};

var partners = function(arr){
  // join the x,y elements
  // move the partners to a new location
};