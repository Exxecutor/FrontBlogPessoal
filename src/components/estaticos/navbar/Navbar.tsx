import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./Navbar.css";
// import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
// import(Appbar, Toolbar, Typography, Bpx} from '@material-ui/core';)

function navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="bg-menu">
                <Toolbar variant="dense" className="container title">
                    <Box style={{ cursor: "pointer" }}>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{cursor: "pointer"}} >
                                <Typography variant = "h6" color = "inherit">
                                    Home
                                </Typography>
                        </Box>
                        <Box mx={1} style={{cursor: "pointer"}} >
                                <Typography variant = "h6" color = "inherit">
                                    Postagens
                                </Typography>
                        </Box>
                        <Box mx={1} style={{cursor: "pointer"}} >
                                <Typography variant = "h6" color = "inherit">
                                    Cadastrar tema
                                </Typography>
                        </Box>
                        <Box mx={1} style={{cursor: "pointer"}} >
                                <Typography variant = "h6" color = "inherit">
                                    Logout
                                </Typography>
                        </Box>
                    </Box>
                </Toolbar>
        </AppBar>
        </Box >
      );
}
export default navbar;