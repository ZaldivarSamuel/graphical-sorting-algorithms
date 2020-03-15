export async function run(arr){

  for(let i = 0; i < arr.length - 1; i++){

    // setTimeout(function(){
    //   console.log("Red index: " + i);
    //   var rectangle = document.getElementById("rect_"+i);
    //   rectangle.style.backgroundColor = "red";
    // }, 3000);



    var minIndex = i;

    for(var j = i + 1; j < arr.length; j++){

      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }

    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

    document.getElementById("rect_"+i).style.height = arr[i] + "px";
    document.getElementById("rect_"+minIndex).style.height = arr[minIndex] + "px";
  }

  console.log(arr);
}

function turnRectangleRed(index){
  console.log("Red index: " + index);
  var rectangle = document.getElementById("rect_"+index);
  rectangle.style.backgroundColor = "red";
}
