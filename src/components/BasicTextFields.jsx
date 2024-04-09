import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function BasicTextFields() {
  const navigate = useNavigate();
  const [invoice, setInvoice] = React.useState({
            Id: "",
            itemName: "",
           	quantity: 0,
           	price: 0,
           	amount: 0,
  });

  const submitNewInvoice = () => {
    const invoices = localStorage.getItem('invoices');
    const brandNewInvoice = {...invoice, Id: Date.now(), amount: invoice.amount};
    console.log('brndNewInvoice :: ', brandNewInvoice);
    let updatedInvoices = [];
    if (invoices) {
      const existingInvoices = JSON.parse(invoices)
      console.log('existingINvoices :: ', existingInvoices)
      updatedInvoices = [...existingInvoices, {...brandNewInvoice}]
      console.log('updatedInvoices :: ', updatedInvoices)

    } else {
      console.log(brandNewInvoice)
      updatedInvoices =[{...brandNewInvoice}];
      console.log('updatedInvoices :: ', updatedInvoices)

    }
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
    navigate("/invoices");
  }

  return (
    <Box
      component="form"
      display={`flex`}
      alignItems={`bottom`}
      flexDirection={`center`}
      sx={{
        '& > :not(style)': { mr: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off" 
    >
      <TextField type="string" value={invoice.itemName} variant="outlined" onChange={(e) => setInvoice({...invoice, itemName: e.target.value})} label="Item Name" />
      <TextField type="number" value={invoice.quantity} variant="outlined" onChange={(e) => setInvoice({...invoice, quantity: e.target.value, amount: e.target.value*invoice.price})} label="Quantity" />
      <TextField type="number" value={invoice.price} variant="outlined" onChange={(e) => setInvoice({...invoice, price: e.target.value, amount: e.target.value*invoice.quantity})} label="Price" />
      <TextField type="number" value={invoice.amount} variant="outlined" onChange={(e) => setInvoice({...invoice, amount: e.target.value})} label="Amount" />

      <Button sx={{margin: 0}} size="small" variant="contained" onClick={() => submitNewInvoice()}>Submit</Button>

    </Box>
  );
}
