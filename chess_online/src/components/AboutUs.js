import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar'

function CopyRight(){
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'copyright Knight-Takes-Pyne 2020' }
        </Typography>
    )
}

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        flexDirection: 'row',
        justify: 'center',
        alignItems: 'flex-start'
    },
    card: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        padding: '55%'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    }
}));

const cards = [ ['Chris Ceder', './component_img/chrisCImage.jpeg' ], 
    ['Chris Stanley', './component_img/chrisSImage.jpeg'],
    ['Travis Williams', './component_img/travisImage.jpeg'],
    ['Aaron Imbrock', './component_img/aaronImage.png']
];

export default function AboutUs(){
    const classes = useStyles();

    return(
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <Link to='/'>Home</Link>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth='sm'>
                        <Typography component='h1' variant='h2'>
                            The Developers
                        </Typography>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth='lg'>
                        <Grid container spacing={4}>
                            {cards.map(card =>(
                                <Grid item key={card} xs={12} sm={6} md={3} spacing={2}>
                                    <Card className={classes.card}>
                                        <CardMedia className={classes.cardMedia}
                                            image={card[1]}/>
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom component='h2' variant='h5'>
                                                {card[0]}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </main>
            <footer className={classes.footer}>
                <Typography component='p' variant='h6' align='center' color='black' >
                    CodeFellows 401d13 Python Final Project
                </Typography>
                <CopyRight />
            </footer>
        </>
    )
}
