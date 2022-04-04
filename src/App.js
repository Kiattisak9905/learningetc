import './components/Style/index';
import './App.css';

import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom'

import User from './components/Pages/User';
import Dashboard from './components/Pages/Dashboard';
import Report from './components/Pages/Report';
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/Layout/Navbar'
import Sidebar from './components/Layout/Sidebar'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
function App() {

  const [open, setOpen] = React.useState(false);

        return <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
        <Navbar open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen}/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<User />} />
          <Route path='/report' element={<Report />} />
        </Routes>
        </Box>
        </Box>
        </BrowserRouter>
}


export default App;
