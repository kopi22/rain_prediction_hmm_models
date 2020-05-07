import React from 'react';

import ControlPanel from './Components/ControlPanel'
import AnalyticPanel from './Components/AnalyticPanel'

import { Container, Paper } from '@material-ui/core';

import World from './models/world'
import HMM from './models'


const math = require('mathjs')


const defaultWorld = new World(
  true,
  math.matrix([[.7, .3], [.3, .7]]),
  math.matrix([[.9, .1], [.2, .8]])
)

const defaultModels = [
  new HMM(
    math.matrix([[.5], [.5]]),
    math.matrix([[.7, .3], [.3, .7]]),
    {
      false: math.matrix([[.2, 0], [0, .8]]),
      true: math.matrix([[.9, 0], [0, .1]]),
    }
  ),
  new HMM(
    math.matrix([[.5], [.5]]),
    math.matrix([[.7, .3], [.3, .7]]),
    {
      false: math.matrix([[.2, 0], [0, .8]]),
      true: math.matrix([[.9, 0], [0, .1]]),
    }
  ),
]

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      world: defaultWorld,
      models: defaultModels,
    }
  }

  generateNextState = () => {
    const evidence = this.state.world.nextState()
    this.state.models.forEach(model => {
      model.filter(evidence)
    })
    this.forceUpdate()
  }

  resetWorld = () => {
    this.state.world.reset()
    this.state.models.forEach(model => {model.reset()})
    this.forceUpdate()
  }
  
  render() {
    const predictions = this.state.models.map(model => model.filterHistory)

    return (
      <Container maxWidth="lg">
        <Paper elevation={2} style={{paddingLeft: 30, paddingRight: 30, marginTop: 30}}>
          <ControlPanel stateHistory={this.state.world.stateHistory} handleNextState={this.generateNextState} handleReset={this.resetWorld}/>
          <AnalyticPanel modelPredictions={predictions} />
        </Paper>
      </Container>
    );
  }
}

export default App;
