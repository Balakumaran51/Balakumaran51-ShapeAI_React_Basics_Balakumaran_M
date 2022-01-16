import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 


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
    wrapper: {
      width: "70%",
      margin: "auto",
      textAlign: "center"
    },
    bigSpace: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: "10rem",
      justifyContent: "center"
    },
    littleSpace:{
      marginTop: "2.5rem",
      textAlign:"justify",
      margin:"0 auto",
    },
    grid:{
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      textDecoration: "none"
    },
  })


  function About() {
    const classes = styles()
    return (

        <div className="App">
        <ThemeProvider theme={theme}>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            My first Portfolio website made using react (frontend-library) 
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          Hello! My Name is Balakumaran a college student and I'm striving to become the best full stack web developer.
          Previously my intrest was on field of Data science as I started working on html and plain css I started to work on my website and  
          I felt web development suits me better than the latter and I started working with React .On my own, I am learning React. 
          I am great at learning on my own which is very important for software engineers.
          I promise to deliver quality work throughout the tenure of the internship or any work I progress through .
          Thanks for visiting my website feel free to visit my linkedIn and github profile.  
          </Typography>
        </div>
        </ThemeProvider>
    </div>
    )
}

export default About;
