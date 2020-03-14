import React from 'react';

import './style.css';
import * as selectionSort from '../selectionSort.js';
import Rectangle from './Rectangle.jsx';

class HomePage extends React.Component{

  render(){
    return(

      <div>
        <h1>Sorting Algorithms</h1>
        <button onClick={() => this.run()}>Run Selection Sort</button>

        <div className="graphic-background">
          <Rectangle rectID={0} height={100}/>
          <Rectangle rectID={1} height={300}/>
          <Rectangle rectID={2} height={200}/>
        </div>

      </div>
    );
  }

  componentDidMount(){
    // this.fixDPI();
    // this.drawSquares();
  }

  run(){
    selectionSort.run(this.rectangles);
  }
}

// class Rectangle{
//
//   //TODO: Turn member values to private
//   constructor(xPos, height){
//     this.xPos = xPos
//     this.height = height;
//   }
//
//   getHeight(){
//     return this.height;
//   }
//
//   getXPos(){
//     return this.xPos;
//   }
// }

export default HomePage;
