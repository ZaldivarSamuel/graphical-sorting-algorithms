import React from 'react';

import './style.css';
import * as selectionSort from '../selectionSort.js';
import Rectangle from './Rectangle.jsx';

class HomePage extends React.Component{

  constructor(){
    super();

    

    this.rectangleHeights = [100,300,200];
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
