import React from 'react';
import './App.css';
import { Box } from "@mui/material"
import { Grid, Paper } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Pode importar o Route como Rouses se quiser, e usar o Link no lugar de Route
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/Login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import {Provider} from 'react-redux';
import store from './store/store';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Poderia usar ainda a estrutura :
    // <Router>
    //   <Navbar/>
    //     <Switch>
    //       <div>
    //         <Route path="/" exact component={Home} />
    //       </div>
    //     </Switch>
    // </Router>

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
    
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />

        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
