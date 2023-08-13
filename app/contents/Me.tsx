import React from 'react';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import ContentsTitle from '../utils/ContentsTitle';
import Typography from "@mui/material/Typography";

const imageStyle = {
    width: '20%',
    paddingLeft: '20px',
    borderRadius: '50%',
    minWidth: '200px'
};

export const Me = () => {
  return (
    <Container>
        <Box sx={{ textAlign: 'center', mt: 10}}>
            <ContentsTitle text='Me'/>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', mt: 10}}>
            <Box sx={imageStyle}>
                <img src="./images/my_photo.png" alt="" style={{width: '50%', borderRadius: '50%'}}/>
            </Box>
            <Typography sx={{ marginLeft: '-10px' }}>
                1994年10月11日生まれ。<br />
                2020年からプログラミングを知り独学で学習開始。<br />
                2022年にソフトフェア・システム開発を専門に行う企業に未経験で転職。前職は金属加工を専門とした製造会社。<br />
                現在はWeb系のシステム開発に携わっています。
            </Typography>
        </Box>
    </Container>
  )
}
