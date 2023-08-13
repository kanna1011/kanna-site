// use client
"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const pages = ['About', 'Skills', 'Works', 'Me', 'Contact'];

const theme = createTheme({
    palette: {
        primary: {
            main: '#414141',
            contrastText: '#fff'
        },
    },
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id.toLowerCase()); // id属性は小文字に変換して使用
    const headerOffset = 200;
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Kanna.site
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Button
                                    key={page}
                                    onClick={() => handleScroll(page)}
                                    sx={{ my: 2, color: '#414141', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Kanna.site
                    </Typography>
                    <Box sx={{ flexGrow: 12}}></Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={() => handleScroll(page)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;