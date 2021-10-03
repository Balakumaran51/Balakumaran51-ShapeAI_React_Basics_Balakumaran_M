import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer';
import './App.css';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import DesktopMacRoundedIcon from '@material-ui/icons/DesktopMacRounded';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import {BrowserRouter as Router, Route ,Switch,NavLink } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';

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
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    textDecoration: "none"
  },
})
function App() {
  const classes = styles(); 

  return (
    <Router>
    <div className="App">
        <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            My first Portfolio website made using react (frontend-library) 
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          Hello! My Name is Balakumaran a college student and I'm striving to become the best full stack web developer. Currently I am working on projects with python and flutter. On my own, I am learning React, machine learning with python. I am great at learning on my own which is very important for software engineers.I promise to deliver quality work throughout the tenure of the internship or any work I progress through .Thanks for visiting my website feel free to visit my linkedIn and github profile.  
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <NavLink to='Resume'><Grid icon={<DescriptionRoundedIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  btnTitle="Resume" /></NavLink>
        <NavLink to='Projects'><Grid icon={<DesktopMacRoundedIcon style={{fill: "#449A76", height:"125", width:"125"}}/>}  btnTitle="Projects"/></NavLink>
        <NavLink to='Skills'><Grid icon={<InsertChartOutlinedIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}   btnTitle="Skills"/></NavLink>
        </div>
        <div className={classes.bigSpace}>
        <Switch>
          <Route exact path="/Resume">
            <Resume />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Footer">
            <Footer />
          </Route>
        </Switch>
        </div>
      </ThemeProvider>
    </div>
    </Router>
  );
}

export default App;
