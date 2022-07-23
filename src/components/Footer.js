import React from 'react';
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function Footer() {
  return (
    <div class='footermain'>
      <div class='footerbody'>
        <div class='footer-a'>
          Desgined and Coded by Tony J.J Fan
        </div>
        <div class='footer-b'>
          2022@TJJF
        </div>
        <div class='footer-c'>
          <a href='https://github.com/tonybs03' target='blank' class='github'>
            <GitHubIcon fontSize='inherit' sx={{ color: '#2193b0', '&:hover': { color: 'violet', fontSize: '48px' }, transition: 'all 0.5s ease' }} />
          </a>
          <a href='https://www.linkedin.com/in/tony-junjing-fan/' target='blank' class='linkedin'>
            <LinkedInIcon fontSize='inherit' sx={{ color: '#2193b0', '&:hover': { color: 'violet', fontSize: '54px' }, transition: 'all 0.5s ease' }} />
          </a>
          <a href='https://www.facebook.com/Caretogohomecare' target='blank' class='facebook'>
            <FacebookOutlinedIcon fontSize='inherit' sx={{ color: '#2193b0', '&:hover': { color: 'violet', fontSize: '51px' }, transition: 'all 0.5s ease' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
