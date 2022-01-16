import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
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
import About from './components/About';

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
function App() {
  const classes = styles(); 

  return (
    <Router>
    <div className="App">
        <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
        <NavLink to='Resume'><Grid icon={<DescriptionRoundedIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  btnTitle="Resume" /></NavLink>
        <NavLink to='Projects'><Grid icon={<DesktopMacRoundedIcon style={{fill: "#449A76", height:"125", width:"125"}}/>}  btnTitle="Projects"/></NavLink>
        <NavLink to='Skills'><Grid icon={<InsertChartOutlinedIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}   btnTitle="Skills"/></NavLink>
        </div>
        <div className={classes.bigSpace}>
        <Switch>
        <Route exact path="/About">
        <About/>
        </Route>
          <Route path="/Resume">
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
