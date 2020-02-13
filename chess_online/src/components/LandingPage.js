import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

// followed tutorial from https://material-ui.com/getting-started/example-projects/, put in my code to make
// the way I wanted it to.


function CopyRight(){
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'copyright Knight-Takes-Pyne 2020' }
        </Typography>
    )
}

const useStyles = theme =>({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(./component_img/chessHomePageImg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
});


class LandingPageForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            submitted : false
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name] : event.target.value })
    }
    submitHandler = event => {
        event.preventDefault();
        const data = { 'username' : this.state.username }
        this.props.onSubmit(data)
        this.setState({ submitted : true })
        
    }
    
    render(){
        const { classes } = this.props;
        if (this.state.submitted){
            return <Redirect to='/game' />
        }
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
                        <form className={classes.form} noValidate onSubmit={this.submitHandler}>
                            <TextField 
                                variant='outlined'
                                margin='normal'
                                required
                                fullWidth
                                id='name'
                                name='username'
                                label='player name'
                                onChange={this.changeHandler}>
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
                        <Link href='/aboutUs' variant='body2'>
                            About the Dev's
                        </Link>
                    </div>
                </Grid>
            </Grid>
        );
        }
// export default function GameStartForm(){
}
export default withStyles(useStyles)(LandingPageForm)