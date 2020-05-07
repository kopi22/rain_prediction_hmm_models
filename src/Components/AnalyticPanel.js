import React, { useState } from 'react'

import PredictionViewPanel from './PredictionViewPanel'
import AddPanel from './AddPanel'

import { Grid } from '@material-ui/core';

const math = require('mathjs')


const AnalyticPanel = props => {

  const formatData = data => {
    return data.map((p, idx) => {
      const prob = p.subset(math.index(0, 0)) 
      const weather = prob > .5 ? 'rain' : 'sun'
      return { name: `${idx}`, [weather]: prob * 100 }
    })
  }

  const modelData = props.modelPredictions.map(predictions => formatData(predictions))

  let w = 12
  if (modelData.length !== 0) {
    if (modelData[0].length <= 25) {
      w = 4
    } else if (modelData[0].length <= 44) {
      w = 6
    }
  }

  console.log(modelData)

  const predictionViews = modelData.map((data, idx) => (
    <Grid item xs={12} md={w}>
        <PredictionViewPanel name={`Model ${idx + 1}`} data={data} mle={[0, 0, 1]} />
    </Grid>
  ))

  return (
    <Grid container spacing={3} style={{ paddingTop: '20px' }}>
      {predictionViews}
      <Grid item xs={12} lg={w}>
        <AddPanel>
          <h2>Add Model</h2>
        </AddPanel>
      </Grid>
    </Grid>
  )
}

export default AnalyticPanel