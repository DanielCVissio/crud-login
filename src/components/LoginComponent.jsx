import { Button, Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import { useState } from "react";

const loginFormFields = {
    loginUsername: '',
    loginPassword: '',
}

const registerFormFields = {
    registerUsername: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
}

export default ()=> {
  const [checked, setChecked] = useState(true);
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  

  return (
    <div style={{ padding: 30 }}>
        <Grid
          container
          spacing={3}
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> Login </Button>
          </Grid>
        </Grid>
    </div>
  );
}

