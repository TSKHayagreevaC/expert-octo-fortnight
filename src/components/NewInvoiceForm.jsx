import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import InvoiceItemForm from './InvoiceItemForm';
import SundryForm from './SundryForm';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Add } from '@mui/icons-material';

export default function NewInvoiceForm() {
  const navigate = useNavigate();
  const [invoice, setInvoice] = React.useState({
            Id: "",
            Date: "",
            InvoiceNumber: 0,
            CustomerName: "",
            BillingAddress: "",
            ShippingAddress: "",
            GSTIN: "",
            Items: [],
            BillSundrys: [],
            TotalAmount: 0,
  });

  const updateItemsArray = (newItem) => {
    const filteredArray = invoice.Items.filter((ele) => ele.Id !== newItem.Id);
    const updatedItem = {...newItem};
    setInvoice({...invoice, Items: [...filteredArray, updatedItem]});
  }

  const updateSundrysArray = (newBill) => {
    const filteredArray = invoice.BillSundrys.filter((ele) => ele.Id !== newBill.Id);
    const updatedBills = {...newBill};
    setInvoice({...invoice, BillSundrys: [...filteredArray, updatedBills]});
  }

  const deleteSundry = (sundryId) => {
    const newSundryArray = invoice.BillSundrys.filter((ele) => ele.Id !== sundryId);
    setInvoice({...invoice, BillSundrys: [...newSundryArray]});
  }

  const addNewSundry = () => {
    setInvoice({...invoice, BillSundrys: [...invoice.BillSundrys, {
            Id: `${Date.now()}${Math.floor(Math.random()*100)}`,
            billSundryName: "",
            amount: ""
        }]
    });
  }

  const deleteItem = (itemId) => {
    const newItems = invoice.Items.filter((ele) => ele.Id !== itemId);
    setInvoice({...invoice, Items: [...newItems]});
  }

  const addNewItem = () => {
    setInvoice({...invoice, Items: [...invoice.Items, {
        Id: `${Date.now()}${Math.floor(Math.random()*100)}`,
        itemName: "",
        quantity: 0,
        price: 0,
        amount: 0,
        }]
    });
  }

  const submitNewInvoice = () => {
    const invoices = localStorage.getItem('invoices');
    const newDateISO = new Date().toLocaleString();
    const brandNewInvoice = {...invoice, Id: Date.now(), Date: newDateISO};
    let updatedInvoices = [];
    if (invoices) {
      const existingInvoices = JSON.parse(invoices);
      const newInvoiceNumber = existingInvoices.length+1;
      updatedInvoices = [...existingInvoices, {...brandNewInvoice, InvoiceNumber: newInvoiceNumber}]

    } else {
      updatedInvoices =[{...brandNewInvoice, InvoiceNumber: 1}];

    }
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    navigate("/invoices");
  }

  return (
    <Box
      component="form"
      display={`flex`}
      alignItems={`bottom`}
      flexDirection={`column`}
      gap={2}
      sx={{
        '& > :not(style)': { mr: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off" 
    >
      <TextField size="small" type="string" value={invoice.CustomerName} variant="outlined" onChange={(e) => setInvoice({...invoice, CustomerName: e.target.value})} label="Customer Name" />
      <TextField size="small" type="string" value={invoice.BillingAddress} variant="outlined" onChange={(e) => setInvoice({...invoice, BillingAddress: e.target.value})} label="Billing Address" />
      <TextField size="small" type="string" value={invoice.ShippingAddress} variant="outlined" onChange={(e) => setInvoice({...invoice, ShippingAddress: e.target.value})} label="Shipping Address" />
      <TextField size="small" type="string" value={invoice.GSTIN} variant="outlined" onChange={(e) => setInvoice({...invoice, GSTIN: e.target.value})} label="GSTIN" />
      
      <Box display="flex" flexBasis={`row`} alignItems={`center`}>
        <Typography>Items</Typography>
        <Tooltip title="Add Item">
            <IconButton color="primary" sx={{margin: 0, maxWidth:100}} size="small" variant="outlined" onClick={() => addNewItem()}><Add /></IconButton>
        </Tooltip>
      </Box>
      {invoice.Items.map((ele) => <InvoiceItemForm key={ele.Id} details={ele} deleteItem={deleteItem} updateItemsArray={updateItemsArray} />)}

      <Box display="flex" flexBasis={`row`} alignItems={`center`}>
        <Typography>Bill Sundrys</Typography>
        <Tooltip title="Add Bill Sundry">
            <IconButton color="primary" sx={{margin: 0, maxWidth:100}} size="small" variant="outlined" onClick={() => addNewSundry()}><Add /></IconButton>
        </Tooltip>
      </Box>
      {invoice.BillSundrys.map((ele) => <SundryForm key={ele.Id} details={ele} deleteSundry={deleteSundry} updateSundrysArray={updateSundrysArray} />)}

      <TextField size="small" type="number" value={invoice.TotalAmount} variant="outlined" onChange={(e) => setInvoice({...invoice, TotalAmount: 100})} label="Total Amount" />

      <Box display={`flex`} flexDirection={`row`} alignItems={`center`} gap={1}>
        <Button sx={{margin: 0, maxWidth: '1rem'}} size="small" variant="contained" onClick={() => submitNewInvoice()}>Submit</Button>
        <Button sx={{margin: 0, maxWidth: '1rem'}} size="small" variant="outlined" onClick={() => submitNewInvoice()}>Cancel</Button>
      </Box>

    </Box>
  );
}
  