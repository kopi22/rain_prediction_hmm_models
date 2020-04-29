import React from 'react'

import panelStyles from '../styles/panelStyles'

import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'


const useStyles = makeStyles({...panelStyles,
    centeredBox: {
        height: '100%', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column',
    }
})

const AddPanel = props => {
    const classes = useStyles()


    return (
        <div className={`${classes.panel} ${classes.centeredBox}`}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            {props.children}
        </div>
    )
}

export default AddPanel