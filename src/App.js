import React from 'react';
import './App.css';

import * as selectionSort from './selectionSort.js';

function App() {
  return (
    <div>
      <h1>Sorting Algorithms</h1>
      <button onClick={() => selectionSort.run()}>Selection Sort</button>
    </div>
  );
}

export default App;
