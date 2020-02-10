import React from 'react';
import Button from '@material-ui/core/button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function CopyRight(){
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'copyright Knight-Takes-Pyne 2020' }
        </Typography>
    )
}

const useStyles = makeStyles(theme =>({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(./component_img/chessHomePageImg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPostition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

export default function GameStartForm(){
    const classes = useStyles()

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component='h1' variant='h3'>
                        Knight-Takes-Pywn
                    </Typography>
                    <br />
                    <Typography component='h1' variant='h5'>
                        Enter Game
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField 
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='name'
                            label='player name'>
                        </TextField>
                        <Button 
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}>
                            Enter Game
                        </Button>
                        <Box mt={5}>
                            <CopyRight />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}