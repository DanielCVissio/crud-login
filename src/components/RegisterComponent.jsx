import { Button, Grid, TextField } from '@mui/material';
import * as React from 'react';


export default ()=> {
    
    return (
      <div style={{ padding: 30 }}>
          <Grid
            container
            spacing={4}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
          >
            <Grid item xs={12}>
              <TextField label="Username"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password2" type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
            
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth> Register </Button>
            </Grid>
          </Grid>
      </div>
    );
  }