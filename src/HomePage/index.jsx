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
    this.drawSquares();
  }

  drawSquares(){

    var c = document.getElementById("selection-sort-canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(20,20,150,100);
    ctx.stroke();
  }
}

export default HomePage;
