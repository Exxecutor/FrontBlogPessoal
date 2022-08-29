import React from 'react'
import './Home.css';
import {Box} from "@mui/material"
import {Grid, Paper, Button, Typography, TextField} from "@material-ui/core"
// Digitar rfce para criar componentes
function Home(){
    return(
        <Grid container className="bg-home">
      <Grid item xs={12} sm={12}>

        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">

          <Box className="card">
            <Typography className='card-title' variant="h4" align="center">
              Login
            </Typography>

            <form>
              <Box marginY={4}>
                <TextField className='form-input' id="standard-basic" type="email" label="Email" required />
              </Box>

              <Box marginY={4}>
                <TextField className='form-input' id="standard-basic" type="password" label="Senha" required />
              </Box>

              <Button className="form-btn" variant="contained">
                Acessar
              </Button>
            </form>

          </Box>
        </Box>

      </Grid>
    </Grid>
  )
}

export default Home;