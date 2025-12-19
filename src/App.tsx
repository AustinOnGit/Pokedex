import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './themes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router ={router} />
    </ThemeProvider>
  );
  
}

export default App;
