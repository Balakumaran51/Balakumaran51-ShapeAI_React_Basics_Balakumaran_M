import React from 'react';
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
    resume:{
        padding:"30px",
        width:"75%",
        background:"#c1c1c1",
        textAlign: "left",
    },
    intro: {
      textAlign: "right",
    },
    bigSpace: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    littleSpace:{
      marginTop: "0.4rem",
    },
  })
function Resume() {
    const classes = styles(); 
return (
    <div className={classes.resume}>
    <Typography variant="h4" className={classes.bigSpace} color="primary">
    <h1>Resume</h1>
    </Typography>
    <Typography variant="h6" className={classes.littleSpace} color="primary">
    <div className={classes.intro}>
    <h3>CONTACT</h3> 
    <p>balakumaran5102@gmail.com</p>
    <p>Chennai</p></div>

    <div className={classes.content}>
    <h3>EDUCATION</h3>	
    <h3>Bachelor of Engineering (BE), Electronics and Communication</h3>
    <p>St Joseph's College Of Engineering (2019 - 2023)</p>
    <p>CGPA: 8.66/10</p>

    <h3>Senior Secondary (XII), Science</h3>
    <p>Velammal Vidhyashram (CBSE board)</p>
    <p>Year of completion: 2018</p>
    <p>Percentage: 86.20%</p>

    <h3>Secondary (X)</h3>
    <p>Sri Sathya Sai Institute Of Educare (CBSE board)</p>
    <p>Year of completion: 2016</p>
    <p>CGPA: 9.2/10</p>

    <h3 >TRAININGS</h3>	
    <h3>Data Analysis FreeCodeCamp, Online Jun 2021 - Jul 2021</h3>
    <p>In this training I have learnt to master data analysis with python, with some projects that applies to industrial levels. I hope I can take full ownership over the product life cycle and understand customer needs through research and market data, own and shape the backlog</p>

    <h3>PROJECTS</h3>	
    <h3>Data Analysis With Python(5 mini-projects)(FreeCodeCamp)</h3>
    <p>Apr 2021 - Sep 2021</p>
    <p>The purpose of Data Analysis is to extract useful information from data. I have done <a href='https://github.com/Balakumaran51/freecodecamp-projects'>projects</a> that cover basic topics that applies to industrial level with four python libraries: Numpy, Pandas, Matplotlib.pyplot, Seaborn.</p>

    <h3>Steve Jobs Tribute Page</h3>
    <p>Aug 2021 - Aug 2021</p>
    <p>I’ve tried to build a Tribute page for Steve Jobs with as HTML and CSS. This is my <a href='https://codepen.io/balakumaran51/pen/NWgKwgr'>first project</a>. I tried to get some practice with plain CSS and responsiveness So I didn't use other front-end libraries like SASS,React.js,Vue.js.</p>

    
    <h3>SKILLS</h3>
    <p>JavaScript: Beginner</p>
    
    <p>Python: Intermediate</p>
    
    <p>Data Science: Intermediate</p>
    
    <p>Django: Beginner</p>
    
    <p>Flutter: Intermediate</p>
    
    <p>ReactJS: Beginner</p>
    
    <p>HTML: Intermediate</p>
    
    <p>CSS: Intermediate</p>
    </div>

</Typography>
<Footer/>
</div>
    );
  }
export default Resume;
