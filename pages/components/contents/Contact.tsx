import React from 'react';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import ContentsTitle from '../utils/ContentsTitle';
import ContactForm from '../utils/ContactForm';
import Typography from "@mui/material/Typography";

export const Contact = () => {
  return (
    <Container>
        <Box sx={{ textAlign: 'center'}}>
            <ContentsTitle text='Contact'/>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 5}}>
            <Typography sx={{ color: '#414141' }}>
            最後までご覧いただきありがとうございました。<br />
            サイトを通して少しでも私を知っていただけたら嬉しいです。<br />
            ご連絡等ございましたら下記フォームをご利用ください。
            </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 10}}>
            <ContactForm />
        </Box>
    </Container>
  )
}
