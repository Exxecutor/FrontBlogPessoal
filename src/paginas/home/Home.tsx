import React from 'react'
import './Home.css';
import {Box} from "@mui/material"
import {Grid, Paper} from "@material-ui/core"
// Digitar rfce para criar componentes
function Home(){
    return(
        <>
        {/* O material ui multiplica os tamanhos */}
        <Box display="flex" justifyContent="center" margin="10px">
            <h1>Hello</h1>
        </Box>
            <h1 className='titulo'>Home</h1>
            <Grid container>
                <Grid xs={12} sm={6} item><Paper style={{height: "100vh", background:"crimson"}}/></Grid>
                <Grid xs={12} sm={6} item ><Paper style={{height: "100vh", background:"green"}}/></Grid>
                <img src="https://i.imgur.com/H88yIo2.png" alt="Imagem Tela Inicial" className="img"/>
            </Grid>
        </>
    );
}

export default Home;