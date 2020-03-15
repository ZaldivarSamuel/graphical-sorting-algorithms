import React from 'react';

import './style.css';
import * as selectionSort from '../selectionSort.js';
import Rectangle from './Rectangle.jsx';

class HomePage extends React.Component{

  constructor(){
    super();

    this.rectangleHeights = [];

    for(var i = 1; i < 175; i++){
      var height = Math.floor(Math.random() * 495) + 5;
      this.rectangleHeights[i - 1] = height;
    }
  }

  render(){
    return(

      <div>
        <h1>Sorting Algorithms</h1>
        <button onClick={() => this.run()}>Run Selection Sort</button>

        <div className="graphic-background">
            {this.rectangleHeights.map((value, index) => {
              return <Rectangle rectID={index} height={value} />
            })}
        </div>

      </div>
    );
  }

  run(){
    selectionSort.run(this.rectangleHeights);
  }
}

export default HomePage;
