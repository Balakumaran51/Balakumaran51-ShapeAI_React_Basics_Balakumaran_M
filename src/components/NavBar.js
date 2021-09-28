import React from 'react'
import {Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "rgb(24,24,24)",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        color:"white",
        "&:hover": {
            color:  "rgb(79,37,247)"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="left" color="rgba(0, 0, 0, 0.87)" className={classes.bar}> 
                <Typography variant="h6" className={classes.menuItem}>
                   About Me
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Resume
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Projects
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Skills 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Me 
                </Typography>
            </Toolbar>
    )
}

export default NavBar
