import React from 'react';
import './App.css';
import {Box} from "@mui/material"
import { Grid, Paper } from '@material-ui/core';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
      <Home/>
    <Footer/>
    </>
  );
}

export default App;
