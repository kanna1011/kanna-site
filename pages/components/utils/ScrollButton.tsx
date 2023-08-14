import React from 'react';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

type ScrollButtonProps = {
  text: string;
};

const ScrollButton: React.FC<ScrollButtonProps> = ({ text }) => {

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 200;
    if (element) {
        const topPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
    }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 10, width: '100%' }}>
      <Button onClick={() => handleScroll(text)} sx={{ color: '#414141', fontSize: '2rem' }}>
          <KeyboardDoubleArrowDownIcon fontSize="large" />
      </Button>
    </Box>
  );
};

export default ScrollButton;
