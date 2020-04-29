import React, { useState } from 'react'

import PredictionViewPanel from './PredictionViewPanel'
import AddPanel from './AddPanel'

import { Grid } from '@material-ui/core';


const AnalyticPanel = props => {

    const [models, setModels] = useState([

    ])

    const data = [...Array(29).keys()].map((prob, idx) => {
        let weather = prob > .5 ? 'rain' : 'sun'
        return {name: `${idx}`, [weather]: prob * 100}
    })

    let w = 12
    if (data.length <= 29) {
        w = 4
    } else if (data.length <= 48) {
        w = 6
    }   

    return (
        <Grid container spacing={3} style={{paddingTop: '20px'}}>
            <Grid item xs={12} md={w}>
              <PredictionViewPanel name='Model 1' data={data} mle={[0, 0, 1]} />
            </Grid>
            <Grid item xs={12} lg={w}>
              <PredictionViewPanel name='Model 2' data={data} mle={[0, 0, 1]} />
            </Grid>
            <Grid item xs={12} lg={w}>
              <PredictionViewPanel name='Model 3' data={data} mle={[0, 0, 1]} />
            </Grid>
            <Grid item xs={12} lg={w}>
              <PredictionViewPanel name='Model 4' data={data} mle={[0, 0, 1]} />
            </Grid>
            <Grid item lg={8}>
                <AddPanel>
                    <h2>Add Model</h2>
                </AddPanel>
            </Grid>
        </Grid>
    )
}

export default AnalyticPanel