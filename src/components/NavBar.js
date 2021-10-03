import React from 'react'
import {Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import  {BrowserRouter as Router, Link} from 'react-router-dom';

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
        },
        dec:{
            textDecoration:"none",
            color: "white",
            "&:hover": {
                color:  "rgb(79,37,247)"
            },
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
                <Link to='Resume' className={classes.dec}>   
                Resume
                </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link to='Projects' className={classes.dec}>   
                Projects
                </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link to='Skills' className={classes.dec}>   
                Skills
                </Link> 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link to='Footer' className={classes.dec}>   
                Contact Me
                </Link> 
                </Typography>
            </Toolbar>
    )
}

export default NavBar
