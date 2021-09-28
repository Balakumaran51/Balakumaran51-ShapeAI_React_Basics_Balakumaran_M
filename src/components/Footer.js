import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
function Footer() {
  const alertMessage = () => {
    alert('Are you sure you want to leave this site');
  } 
    return (
        <BottomNavigation >
          <a href="https://github.com/Balakumaran51" onClick={ alertMessage }><BottomNavigationAction label="Github" value="favorites" icon={<GitHubIcon  style={{fill: "#800080"}}/>} /></a>
          <a href="https://www.linkedin.com/in/balakumaran-m-a8a936208/" onClick={alertMessage}><BottomNavigationAction label="LinkedIn" value="folder" icon={<LinkedInIcon style={{fill: "#06598c"}}/>} /></a>
          <a href="https://codepen.io/balakumaran51" onClick={alertMessage}> <BottomNavigationAction label="Codepen" value="favorites" icon={<DeveloperModeIcon style={{fill: "black"}}/>} /></a>
          <a href="https://twitter.com/BalakumaranM16" onClick={alertMessage}> <BottomNavigationAction label="Twitter" value="folder" icon={<TwitterIcon style={{fill: "#0080ff"}}/>} /></a>
          </BottomNavigation>
)
}
export default Footer
