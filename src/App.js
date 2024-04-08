import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Invoices from "./components/Invoices";
import InvoiceDetails from "./components/InvoicesDetails";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
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

const drawerWidth = 240;

function App(){
  return (
  <Router>        
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/invoices' element={<Invoices/>} />
        <Route path="/invoices/:id" element={<InvoiceDetails />} />
      
        </Routes>
        </Router>

  )
}

export default App;