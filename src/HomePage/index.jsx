import React from 'react';

import './style.css';

class HomePage extends React.Component{

  render(){
    return(

      <div>
        <h1>Sorting Algorithms</h1>
        <button onClick={() => this.test()}>Run Selection Sort</button>

        <canvas id="selection-sort-canvas" className="graphic-background">

        </canvas>
      </div>
    );
  }

  componentDidMount(){
    this.fixDPI();
    this.drawSquares();
  }

  drawSquares(){

    var rectangles = [new Rectangle(20, 200)];

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
    ctx.fillStyle = 'yellow';

    for(var i = 0; i < rectangles.length; i++){
      console.log("Index: " + i + ", xPos: " + rectangles[i].getXPos() + ", height: " + rectangles[i].getHeight());
      ctx.fillRect(rectangles[i].getXPos(),style.height() - 205,10, rectangles[i].getHeight());
    }
  }

  fixDPI(){
    let canvas = document.getElementById("selection-sort-canvas");
    let dpi = window.devicePixelRatio;

    let style = {
      height() {
        return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
      },
      width() {
        return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
      }
  }

    canvas.setAttribute('width', style.width() * dpi);
    canvas.setAttribute('height', style.height() * dpi);
  }
}

class Rectangle{

  //TODO: Turn member values to private
  constructor(xPos, height){
     this.xPos = xPos
    this.height = height;

    console.log("Created Rectangle( " + xPos + ", " + height + ")")
  }

  getHeight(){
    console.log("Returning height: " + this.height);
    return this.height;
  }

  getXPos(){
    return this.xPos;
  }
}

export default HomePage;
