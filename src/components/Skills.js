import React from 'react';
import Footer from './Footer';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

function Skills() {
    const theme = createMuiTheme({
        palette: {
          primary: {
              main:"#2e1667",
          },
          secondary: {
              main:"#c7d8ed",
          },
        },
        typography: {
            fontFamily: [
                'Roboto'
          ],
          h4: {
              fontWeight: 600,
              fontSize: 28,
              lineHeight: '2rem',
            },
            h5: {
                fontWeight: 100,
            lineHeight: '2rem',
        },
    },
});
const styles = makeStyles({
    bigSpace: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    littleSpace:{
        marginTop: "0.3rem",
    },
    alignment:{
        display: "flex",
    },
    big:{
        width:"65%",
        height:"30px",
        background:"rgb(15,15,15,0.7)"
    },
    small:{
        width:"40%",
        height:"30px",
        background:"rgb(15,15,15,0.7)"
    },
    start:{
        width:"35%",
        height:"30px",
        background:"orange",
        alignContent:"right"
    },
    mid:{
        width:"60%",
        height:"30px",
        background:"green",
        alignContent:"right"
    },
    skills:{
        textAlign: "left",
        width:"55%"
    }
})
const classes = styles(); 
return (
    <div className={classes.skills}>
    <Typography variant="h3" className={classes.bigSpace} color="primary">
    <h3>SKILLS</h3></Typography>
    <Typography variant="h5" className={classes.littleSpace} color="primary">
        <p>JavaScript: Beginner<div className={classes.alignment}><div className={classes.start}></div><div className={classes.big}></div></div></p>
        <br/>
        <p>Python: Intermediate<div className={classes.alignment}><div className={classes.mid}></div><div className={classes.small}></div></div></p>
        <br/>
        <p>Data Science: Intermediate<div className={classes.alignment}><div className={classes.mid}></div><div className={classes.small}></div></div></p>
        <br/>
        <p>Django: Beginner<div className={classes.alignment}><div className={classes.start}></div><div className={classes.big}></div></div></p>
        <br/>
        <p>Flutter: Beginner<div className={classes.alignment}><div className={classes.start}></div><div className={classes.big}></div></div></p>
        <br/>
        <p>ReactJS: Beginner<div className={classes.alignment}><div className={classes.start}></div><div className={classes.big}></div></div></p>
        <br/>
        <p>HTML: Intermediate<div className={classes.alignment}><div className={classes.mid}></div><div className={classes.small}></div></div></p>
        <br/>
        <p>CSS: Intermediate<div className={classes.alignment}><div className={classes.mid}></div><div className={classes.small}></div></div></p>
        </Typography>
        <hr/>
        <Footer/>
        </div>
        );
    
  }
 export default Skills;
  