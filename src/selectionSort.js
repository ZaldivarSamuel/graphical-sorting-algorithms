export async function run(){

  var array = [6,2,34,100,65,22,0,1,2,9];

  var minIndex = 0;

  for(var i = 0; i < array.length - 1; i++){

    minIndex = i;

    for(var j = i + 1; j < array.length; j++){

      if(array[j] < array[minIndex]){
        minIndex = j;
      }
    }

    var temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;

  }
}
