import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box } from "@mui/material"
import { Grid, Paper, Button, Typography, TextField } from "@material-ui/core"
import { Link ,useNavigate } from "react-router-dom"
import './Login.css';
import UserLogin from '../../models/UserLogin';
// import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import {useDispatch} from 'react-redux';
import {addToken} from "../../store/tokens/actions";
import { toast } from 'react-toastify';

function Login() {
    // Redireciona o usuário para determinada página
    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    //Hooks que vão manipular o nosso local storage para gravar o token
    // const [token, setToken] = useLocalStorage('token');
    // useState define como uma variavel será inicializada quando o componente for renderizado
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
    //hook de efeito colateral, sempre executa uma função quando o que estiner no seu Array é ativado
    useEffect(()=>{
        if(token != ''){
            dispatch(addToken(token));
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        //previne que a página seja recarregada
        e.preventDefault();
        try{
            // const resposta= await api.post
            await login(`/usuarios/logar`, userLogin, setToken)
            // setToken(resposta.data.token)

            // alert("Logado com sucesso")
            toast.success("Logado com sucesso",{
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }catch(error){
            // alert("Erro ao logar")
            toast.error("Erro ao logar",{
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }
    }
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary'
                            component='h3' align='center' className='textos1'>
                            Entrar
                        </Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e) } id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>

                                <Button type='submit' variant='contained' color='primary' style={{ color: "white" }}>
                                    Logar
                                </Button>

                        </Box>
                    </form>
                    <Box>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'
                            >Não tem uma conta?
                            </Typography>
                        </Box >
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'
                            >Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            {/* `url(http://i.imgur.com/d5bMdDJ.jpg)` */}
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;