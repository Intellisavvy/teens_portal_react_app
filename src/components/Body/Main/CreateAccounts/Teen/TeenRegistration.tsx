import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RegImg from '../../../../images/reg.png';
import Register from './TeenRegForm';
import './../RegStyles.css';

// Other way to import images
const Imag = require("../../../../images/reg.png");


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1, marginTop: '2rem' }} >
            <Grid container spacing={0.2}>
                <Grid item md={5}
                    sx={{ justifyContent: 'center', mt: '10rem'}}
                    display={{ xs: "none", lg: "block" }}
                >
                    <span className='PicHead'>
                        Find the job and grow your career
                    </span>
                    <img src={RegImg} />
                </Grid>

                <Grid item md={7}>
                    <Register />
                </Grid>
            </Grid>
        </Box>
    );
}