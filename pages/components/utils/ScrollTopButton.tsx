import React from 'react';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollTopButton: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fab 
      aria-label="scroll back to top" 
      onClick={handleScrollTop}
      sx={{
        position: 'fixed',
        bottom: 50,
        right: 50,
        color: '#414141'
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
}

export default ScrollTopButton;
