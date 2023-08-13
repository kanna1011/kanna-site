import React from 'react';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import ContentsTitle from '../utils/ContentsTitle';
import Typography from "@mui/material/Typography";

const imageStyle: React.CSSProperties = {
    width: '40%',
    height: 'auto'
};
export const About = () => {
  return (
    <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 20 }}>
            <img src='./images/kanna_site_image.png' style={imageStyle}></img>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 5}}>
            <ContentsTitle text='About'/>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 5}}>
            <Typography sx={{ color: '#414141' }}>
                ここはエンジニアKannaのポートフォリオサイトです。<br />
                今まで手掛けた制作物、身に着けたスキルをまとめています。<br />
            </Typography>
        </Box>
    </Container>
  )
}
