
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

export default function MainNavbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: { sm: 'block' }, mr: 3 }}
                >
                    <Link className='link1' to="/">Home</Link>

                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: { sm: 'block' }, mr: 3 }}
                >
                    <Link className='link1' to="/about">About</Link>

                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: { sm: 'block' }, mr: 3 }}
                >
                    <Link className='link1' to="/login">Login</Link>

                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: { sm: 'block' }, mr: 3 }}
                >
                    <Link className='link1' to="/createacc">Create Account</Link>
                </Typography>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#121212" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { sm: 'block' }, ali: 'center' }}
                    >
                        <span style={{ color: "red", fontWeight: "bolder" }}>Teen</span>Job
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} ><span style={{ color: "#ffffff1a" }}>Main Page</span></Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {/* <Routes> */}
                        <MenuItem>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ display: { sm: 'block' } }}
                            >
                    <Link className='link' to="/">Home</Link>

                            </Typography>

                        </MenuItem>
                        <MenuItem>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ display: { sm: 'block' } }}
                            >
                                <Link className='link' to="/about">About</Link>

                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ display: { sm: 'block' } }}
                            >
                                <Link className='link' to="/login">Login</Link>

                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ display: { sm: 'block' } }}
                            >
                                <Link className='link' to="/createacc">Create Account</Link>

                            </Typography>
                        </MenuItem>
                        {/* </Routes> */}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}

        </Box>
    );
}
