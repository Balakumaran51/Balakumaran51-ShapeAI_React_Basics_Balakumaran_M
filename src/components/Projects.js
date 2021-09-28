import React from "react";
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import Footer from './Footer';
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
    projects:{
      textAlign: "left",
      width:"70%"
    },
    bigSpace: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    littleSpace:{
      marginTop: "0.4rem",
    }
  })
function Projects() {
  const classes = styles(); 
     return (
       <div className={classes.projects}>
       <Typography variant="h4" className={classes.bigSpace} color="primary">
       <h3>Projects</h3></Typography>
       <Typography variant="h5" className={classes.littleSpace} color="primary">

       <h4>Data Analysis With Python(5 mini-projects)(FreeCodeCamp)</h4>
       <p>The purpose of Data Analysis is to extract useful information from data. I have done <a href='https://github.com/Balakumaran51/freecodecamp-projects'>projects</a> that cover basic topics that applies to industrial level with four python libraries: Numpy, Pandas, Matplotlib.pyplot, Seaborn.</p>

       <h4>Steve Jobs Tribute Page</h4>
       <p>I’ve tried to build a Tribute page for Steve Jobs with as HTML and CSS. This is my <a href='https://codepen.io/balakumaran51/pen/NWgKwgr'>first project</a>. I tried to get some practice with plain CSS and responsiveness So I didn't use other front-end libraries like SASS,React.js,Vue.js.</p>   
       
       </Typography>
       <Footer/>
       
       </div>
     );

 }

 export default Projects;