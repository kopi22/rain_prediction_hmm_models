import React from 'react'
import PropTypes from 'prop-types'

import HistoryPanel from './HistoryPanel'
import panelStyles from '../styles/panelStyles'

import { makeStyles } from '@material-ui/core';

import {
    ResponsiveContainer, BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


const useStyles = makeStyles(panelStyles)

const PredictionViewPanel = props => {
    const classes = useStyles()
    return (
        <div className={classes.panel}>
            <h1>{props.name} Forecast:</h1>
            <ResponsiveContainer width='100%' height={220}>
                <BarChart
                    data={props.data}
                    // margin={{
                    //     top: 5, right: 30, left: 20, bottom: 5,
                    // }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} label={{ value: 'Probability of Rain [%]', angle: -90, position: 'insideLeft', style: {textAnchor: 'middle'} }}/>
                    <Tooltip cursor={false}/>
                    <Legend />
                    <Bar dataKey="rain" fill="#8884d8" stackId="a" maxBarSize={10} unit='%'/>
                    <Bar dataKey="sun" fill="#ffe066" stackId="a" maxBarSize={10} unit='%'/>
                    <ReferenceLine y={50} stroke="black" />
                </BarChart>
            </ResponsiveContainer>
            <h3>Predicted history:</h3>
            <HistoryPanel mle={props.mle} />
        </div>
    )
}

PredictionViewPanel.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    mle: PropTypes.arrayOf(PropTypes.oneOf([0, 1])).isRequired,
}

export default PredictionViewPanel