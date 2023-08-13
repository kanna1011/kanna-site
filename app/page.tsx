import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Box sx={{ mt: 10}}></Box>
      <HomePage />
      <Box sx={{ mt: 20}}></Box>
      <Footer />
    </div>
  )
}
