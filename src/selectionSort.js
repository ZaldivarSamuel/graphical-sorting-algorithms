
export async function run(arr){
  var sortedArray = arr.slice();
  var indexArray = [];

  for(var i = 0; i < sortedArray.length-1;i++){
    var minIndex = i;

    for(var j = i + 1; j < sortedArray.length;j++){
      if(sortedArray[j] < sortedArray[minIndex]){
        minIndex = j;
      }
    }

    var temp = sortedArray[i];
    sortedArray[i] = sortedArray[minIndex];
    sortedArray[minIndex] = temp;

    indexArray[i] = minIndex;
  }

  for(var i = 0; i < arr.length - 1; i++){
    for(var j = i + 1; j < arr.length; j++){
      delayed(-100000, function(j){
        return function(){
          document.getElementById("rect_"+j).style.backgroundColor = "red";
          if(j !== 0){
            document.getElementById("rect_"+(j - 1)).style.backgroundColor = "white";
          }
        };
      }(j));

    }

    delayed(-100000, function(i, sArray, iArray){
      return function(){
        document.getElementById("rect_"+iArray[i]).style.height = document.getElementById("rect_"+i).style.height;
        document.getElementById("rect_"+i).style.height = sArray[i] + "px";
        document.getElementById("rect_"+(arr.length - 1)).style.backgroundColor = "white";
      }
    }(i, sortedArray, indexArray));
  }
}

// helper function
var delayed = (function() {
  var queue = [];

  function processQueue() {
    if (queue.length > 0) {
      setTimeout(function () {
        queue.shift().cb();
        processQueue();
      }, queue[0].delay);
    }
  }

  return function delayed(delay, cb) {
    queue.push({ delay: delay, cb: cb });

    if (queue.length === 1) {
      processQueue();
    }
  };
}());
