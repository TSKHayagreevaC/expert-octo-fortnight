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
import {Link} from 'react-router-dom';
import BasicTable from './BasicTable';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';

const drawerWidth = 240;
function Invoices() {
  const [invoicesList, setInvoicesList] = React.useState([])

    React.useState(() => {
      const existingInvoices = localStorage.getItem('invoices');
      if (existingInvoices) {
        const parsedList = JSON.parse(existingInvoices);
        setInvoicesList(existingInvoices);
      }
    }, []);

    return  (
      <PermanentDrawerLeft>
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography paragraph>
            Invoices
          </Typography>
            <Link to="/invoices/new" >
          <Button startIcon={<Add />} size="small" variant="contained">
                Add
            </Button>
            </Link>
        </Box>
      <BasicTable invoicesList={invoicesList} />
    </PermanentDrawerLeft>
    )
    
}

export default Invoices;