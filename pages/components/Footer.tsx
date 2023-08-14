import React from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <AppBar component="footer" position="static" sx={{ backgroundColor: '#414141' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{paddingTop: '20px'}}>
                Thank you.
            </Typography>
            <Typography variant="h6">
                来てくれてありがとうございました
            </Typography>
            <Typography variant="caption">
                ©2023 Kanna.site
            </Typography>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Footer