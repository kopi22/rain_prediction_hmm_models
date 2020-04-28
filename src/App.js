import React from 'react';
import HMM from './models'
import './App.css';


const math = require('mathjs')

function App() {

  const model = new HMM(
    math.matrix([[0.5], [0.5]]),
    math.matrix([[0.7, 0.3], [0.3, 0.7]]),
    {
      'U': math.matrix([[0.9, 0], [0, 0.2]]),
      'nU': math.matrix([[0.1, 0], [0, 0.8]])
    }
  )

  model.filter('U')
  model.filter('U')
  model.filter('nU')
  model.filter('U')
  model.filter('U')
  

  return (
    <div>
      
    </div>
  );
}

export default App;
