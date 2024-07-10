import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import logo from '../assets/logo.svg';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLogin = () => {
    // not important for assignment
  };

  const handleFreeTrial = () => {
    // not important for assignment
  };

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'blue' /* or 'black' */ }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                <ListItem button onClick={handleLogin}>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button onClick={handleFreeTrial}>
                  <ListItemText primary="SignUp" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Resources" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Refer & Earn" />
                </ListItem>
              </List>
            </Drawer>

            <CardMedia
            component="img"
            src={logo}
            alt="Accredian Logo"
            sx={{ width: 'auto', height: 40 }} // Adjust height as needed
            />
            
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button color="inherit" onClick={handleLogin}>Refer & Earn</Button>
            <Button color="inherit" onClick={handleLogin}>Resources</Button>
            <Button color="inherit" onClick={handleLogin}>About</Button>
            <Button color="inherit" onClick={handleLogin}>Login</Button>
            <Button color="inherit" onClick={handleFreeTrial}>SignUp</Button>
            </Box>

          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default Header;
