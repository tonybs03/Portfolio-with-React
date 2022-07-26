import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import './Drawer.css';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: true,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'About Me', 'Portfolio', 'Resume', 'Contact'].map((page, index) => (
          <ListItem key={page} disablePadding >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <HomeIcon color='primary'/> : <span></span>}
                {index === 1 ? <InfoIcon color='primary'/> : <span></span>}
                {index === 2 ? <AppRegistrationIcon color='primary'/> : <span></span>}
                {index === 3 ? <ArticleIcon color='primary'/> : <span></span>}
                {index === 4 ? <MailIcon color='primary'/> : <span></span>}
              </ListItemIcon>
              <Link to={page}> <ListItemText primary={page} primaryTypographyProps={{ style: { fontFamily: 'Rajdhani', fontSize: "24px", fontWeight: "bolder" } }} /> </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} ><MenuIcon /></Button>
          <Drawer
            PaperProps={{
              sx: {
                backgroundColor: "rgba(60, 35, 84, 0.7)",
                borderRadius: "0 30px 30px 0"
              }
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
