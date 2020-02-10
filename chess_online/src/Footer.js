import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography, Avatar, Grid } from "@material-ui/core";
// import Avator from '@material-ui/core/Avator';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Online Chess
                    </Typography>
                    <IconButton>
                <Avatar src="./Images/profile_image.png" />
              </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;