import * as React from 'react';
import {useContext}from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import counterContext from './counterContext';

const Navbar = () => {

  const {fc} = useContext(counterContext)
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="success" >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={fc}
              >
               <VideocamOutlinedIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Connect Us
              </Typography>
              
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar