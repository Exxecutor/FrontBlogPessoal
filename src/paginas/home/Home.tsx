import React,  { useEffect }  from 'react'
import './Home.css';
import {Box} from "@mui/material"
import {Grid, Paper, Button, Typography} from "@material-ui/core"
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
// import useLocalStorage from 'react-use-localstorage';

// Digitar rfce para criar componentes
function Home(){
  let history = useNavigate();
    const token= useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    
    useEffect(() => {
      if (token == "") {
          // alert("Você precisa estar logado")
          toast.error("Você precisa estar logado",{
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });
          history("/login")
  
      }
  }, [token])
  return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
        
        <Grid alignItems="center" item xs={6}>

          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>

          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem/>
            </Box>
            <Link to="/posts">
            <Button variant="outlined" className="botao text-decorator-nome" >Ver Postagens</Button>
            </Link>
          </Box>

        </Grid>

        <Grid item xs={6} >
          <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
        </Grid>

        <Grid xs={12} style={{ backgroundColor: "white" }}>
          <TabPostagem />
        </Grid> 
      </Grid>
    </>
    );
}

export default Home;