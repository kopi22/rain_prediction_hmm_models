import React from 'react'
import { makeStyles, Typography, Grid, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 10, 6),
      },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}))

const ControlPanel = props => {
    const classes = useStyles()

    return (
        <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Next state
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </div>
        </div>
    )
}

export default ControlPanel