import { Grid } from '@material-ui/core'
import React from 'react'

function Services() {
    return (
        <div>
            <Grid container>
                <Grid item xs={8}>
                    <fieldset>
                        <Grid container>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}></Grid>

                        </Grid>
                    </fieldset>
                </Grid>
                <Grid item xs={4}>
                    <fieldset>
                        <legend>Token No</legend>
                    </fieldset>
                </Grid>
            </Grid>
        </div>
    )
}

export default Services
