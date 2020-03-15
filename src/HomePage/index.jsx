import React from 'react';

import './style.css';
import * as selectionSort from '../selectionSort.js';
import Rectangle from './Rectangle.jsx';

class HomePage extends React.Component{

  constructor(){
    super();

    this.rectangleHeights = [];

    for(var i = 1; i < 125; i++){
      var height = Math.floor(Math.random() * 495) + 5;
      this.rectangleHeights[i - 1] = height;
    }
  }

  render(){
    return(

      <div>
        <div className="container">
          <h1 id="title">Sorting Algorithms</h1>
          <div id="algoritm-selector-container">
            <div className="algoritm-container">
              <p className="algoritm-name">Selection Sort</p>
            </div>
          </div>
        </div>

      </div>
    );
  }

  run(){
    selectionSort.run(this.rectangleHeights);
  }
}

export default HomePage;

// <h1>Sorting Algorithms</h1>
// <button onClick={() => this.run()}>Run Selection Sort</button>
//
// <div className="graphic-background">
//     {this.rectangleHeights.map((value, index) => {
//       return <Rectangle rectID={index} height={value} />
//     })}
// </div>
