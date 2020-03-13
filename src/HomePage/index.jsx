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

    var c = document.getElementById("selection-sort-canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(20,299,10,200);

  }

  fixDPI(){
    let canvas = document.getElementById("selection-sort-canvas");
    let ctx = canvas.getContext("2d");
    let dpi = window.devicePixelRatio;

    // let style = {
    //   height(){
    //     return window.getComputedStyle(canvas).getProperty('height').slice(0, -2);
    //   },
    //   width(){
    //     return window.getComputedStyle(canvas).getProperty('width').slice(0,-2);
    //   }
    // }

    canvas.setAttribute('width', 1000 * dpi);
    canvas.setAttribute('height', 500 * dpi);
  }
}

export default HomePage;
