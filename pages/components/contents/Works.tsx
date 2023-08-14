import React from 'react';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import ContentsTitle from '../utils/ContentsTitle';
import WorkItem from '../utils/WorkItem';
import Typography from "@mui/material/Typography";

export const Works = () => {
  return (
    <Container>
        <Box sx={{ textAlign: 'center', mt: 10}}>
            <ContentsTitle text='Works'/>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 5}}>
            <Typography sx={{ color: '#414141' }}>
                制作した成果物たち
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', mt: 5 }}>
            <WorkItem text='Kanna.site' imageUrl='./images/Kanna_site_samne.png' linkUrl='#'></WorkItem>
            <WorkItem text='Github' imageUrl='./images/github_samne.png' linkUrl='https://github.com/kanna1011'></WorkItem>
        </Box>
    </Container>
  )
}
