import React from 'react';

import './style.css';
import * as selectionSort from '../selectionSort.js';

class HomePage extends React.Component{

  constructor(){
    super();

    this.rectangles = [new Rectangle(20, 200), new Rectangle(40, 100), new Rectangle(60, 250)];
  }

  render(){
    return(

      <div>
        <h1>Sorting Algorithms</h1>
        <button onClick={() => this.run()}>Run Selection Sort</button>

        <canvas id="selection-sort-canvas" className="graphic-background">

        </canvas>
      </div>
    );
  }

  componentDidMount(){
    this.fixDPI();
    this.drawSquares();
  }

  run(){
    selectionSort.run(this.rectangles);
  }

  drawSquares(){

    //var rectangles = [new Rectangle(20, 200), new Rectangle(40, 100), new Rectangle(60, 250)];

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
    ctx.fillStyle = 'white';

    for(var i = 0; i < this.rectangles.length; i++){
      ctx.fillRect(this.rectangles[i].getXPos(),style.height() - (this.rectangles[i].getHeight() + 5),10, this.rectangles[i].getHeight());
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
  }

  getHeight(){
    return this.height;
  }

  getXPos(){
    return this.xPos;
  }
}

export default HomePage;
