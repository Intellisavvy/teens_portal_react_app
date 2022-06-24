import { Outlet } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const PublicLayout = () => {
    return <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                   Teens Portal
                </Typography>
            </Toolbar>
        </AppBar>
        all of the home content should be here
        <Outlet />
        public layout footer

    </div>
}