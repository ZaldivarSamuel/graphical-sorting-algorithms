export async function run(arr){

  //var array = [6,2,34,100,65,22,0,1,2,9];

  var c = document.getElementById("selection-sort-canvas");
  var ctx = c.getContext("2d");

  let style = {
    height() {
      return +getComputedStyle(c).getPropertyValue('height').slice(0,-2);
    },
    width() {
      return +getComputedStyle(c).getPropertyValue('width').slice(0,-2);
    }
}

  ctx.beginPath();

  for(var i = 0; i < arr.length - 1; i++){

    // var minIndex = i;
    //
    // for(var j = i + 1; j < array.length; j++){
    //
    //   if(array[j] < array[minIndex]){
    //     minIndex = j;
    //   }
    // }
    //
    // var temp = array[i];
    // array[i] = array[minIndex];
    // array[minIndex] = temp;


    ctx.fillStyle = 'white';

    for(var i = 0; i < this.rectangles.length; i++){
      ctx.fillRect(this.rectangles[i].getXPos(),style.height() - (this.rectangles[i].getHeight() + 5),10, this.rectangles[i].getHeight());
    }



  }
}

export async function drawSquare(){
  alert("Hello World");
}
