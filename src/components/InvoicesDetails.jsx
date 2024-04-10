import React, { useState } from 'react'
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

import NewInvoiceForm from './NewInvoiceForm';
import { defaultInvoiceList } from './data';

const drawerWidth = 240;
function InvoicesDetails() {
  const [details, setDetails] = useState({});
  const pathParams = useParams();

  React.useState(() => {
    const existingInvoices = localStorage.getItem('invoices');
    let sampleList;
    if (existingInvoices) {
      sampleList = existingInvoices;
    } else {
      sampleList = JSON.stringify(defaultInvoiceList);
    }
    const parsedList = JSON.parse(sampleList);
    const itemDetails = parsedList.find((ele) => ele.Id.toString() === pathParams.id);
    if (itemDetails) {
      setDetails({...itemDetails});
    }
  }, []);

    return (
      <PermanentDrawerLeft>
      {pathParams.id === 'new'
      ?
      <Box>
          <Typography paragraph>
            Create New Invoice Form
          </Typography>
          <NewInvoiceForm />
      </Box>
      :
      <Box>
        <Typography paragraph>
          Invoices Details
        </Typography>
        {Object.keys(details).length
        ?
        <List>
          {Object.keys(details).map((ele) => <ListItem key={details.Id}>
            {`${ele} : ${JSON.stringify(details[ele])}`}
          </ListItem>)}
        </List>
        :
        <Typography paragraph>Some thing went wrong, Please try again..!</Typography>
        }
      </Box>
      }
      </PermanentDrawerLeft>
    );
}

export default InvoicesDetails;