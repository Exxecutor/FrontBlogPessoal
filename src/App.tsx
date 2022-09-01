import React from 'react';
import './App.css';
import {Box} from "@mui/material"
import { Grid, Paper } from '@material-ui/core';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//Pode importar o Route como Rouses se quiser, e usar o Link no lugar de Route
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/Login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    //Poderia usar ainda a estrutura :
    // <Router>
    //   <Navbar/>
    //     <Switch>
    //       <div>
    //         <Route path="/" exact component={Home} />
    //       </div>
    //     </Switch>
    // </Router>
    <Router>
    <Navbar/>
      <div style={{minHeight: '100vh'}}>
        <Routes>
          <Route path='/' element={ <Login/> } />
          <Route path='/home' element={ <Home/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path="/cadastro" element={<CadastroUsuario/>} />
        </Routes>
        </div>
    <Footer/>
    </Router>
  );
}

export default App;
