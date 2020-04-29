import React from 'react';

import ControlPanel from './Components/ControlPanel'
import AnalyticPanel from './Components/AnalyticPanel'

import { Container, Paper } from '@material-ui/core';




const math = require('mathjs')

class App extends React.Component {
  constructor(props) {
    super(props)
    // const model = new HMM(
    //   math.matrix([[0.5], [0.5]]),
    //   math.matrix([[0.7, 0.3], [0.3, 0.7]]),
    //   {
    //     'U': math.matrix([[0.9, 0], [0, 0.2]]),
    //     'nU': math.matrix([[0.1, 0], [0, 0.8]])
    //   }
    // )
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Paper elevation={2} style={{paddingLeft: 30, paddingRight: 30, marginTop: 30}}>
          <ControlPanel />
          <AnalyticPanel />
        </Paper>
      </Container>
    );
  }
}

export default App;
