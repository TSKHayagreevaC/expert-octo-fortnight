import React from 'react'
import PermanentDrawerLeft from './PermanentDrawerLeft';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Link, useParams} from 'react-router-dom';

import BasicTable from './BasicTable';
import BasicTextFields from './BasicTextFields';

const drawerWidth = 240;
function InvoicesDetails() {
  const pathParams = useParams();
  console.log("pathParams :: ", pathParams);

    return  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        {['Home'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to='/'>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>

          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Invoices'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to='/invoices'>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>

          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>


    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Toolbar />

      {pathParams.id === 'new'
      ?
      <Box>
          <Typography paragraph>
            Create New Invoice Form
          </Typography>
          <BasicTextFields />
      </Box>
      :
      <Box>
        <Typography paragraph>
          Invoices Details
        </Typography>  
      </Box>
      }
      
    </Box>
  </Box>
}

export default InvoicesDetails;