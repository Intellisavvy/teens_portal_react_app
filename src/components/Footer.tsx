
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "#121212", bottom: "0" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        // variant="div"
                        component="div"
                        sx={{ display: { xs: 'none', md: 'flex' } }}
                    >
                        Copy Right @ 2022 act
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    </Box>
                    <Typography
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Copy Right @ 2022 act
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}></Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <FacebookIcon />
                        <TwitterIcon />
                        <LinkedInIcon />
                        <InstagramIcon />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
