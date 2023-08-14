import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#414141',
            contrastText: '#fff'
        },
    },
});

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await fetch('api/contact', {
            method: 'POST',
            headers: {
              Accept: 'application/json, text/plain',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, comment }),
          });
          
          if (response.ok) {
            console.log("Email sent successfully.");
          } else {
            console.log("Error sending email.");
          }
        } catch (error) {
          console.error("There was an error sending the email.", error);
        }
      };

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="standard"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Box>

                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="standard"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Box>

                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="comment"
                        multiline
                        rows={4}
                        variant="standard"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </Box>

                <Button type="submit" variant="text" color="primary">
                    送信
                </Button>
            </form>
        </ThemeProvider>
    );
};

export default ContactForm;
