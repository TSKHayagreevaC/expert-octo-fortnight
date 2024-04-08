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
    const brandNewInvoice = {...invoice, Id: Date.now()};
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

  const createNewInvoice = (name, quantity, price, amount) => {
    const newInvoice = {
      ...invoice
    };

    if (name) {
      newInvoice.itemName = name;
    }

    if(quantity) {
      newInvoice.quantity = quantity;
    }

    if (price) {
      newInvoice.price = price;
    }

    if (amount) {
      newInvoice.amount = amount;
    }

    console.log(newInvoice);


    setInvoice(newInvoice); 
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
      <TextField variant="outlined" onChange={(e) => createNewInvoice(e.target.value, "", "", "")} label="Item Name" />
      <TextField variant="outlined" onChange={(e) => createNewInvoice("", e.target.value, "", "")} label="Quantity" />
      <TextField variant="outlined" onChange={(e) => createNewInvoice("", "", e.target.value, "")} label="Price" />
      <TextField variant="outlined" onChange={(e) => createNewInvoice("", "", "", e.target.value)} label="Amount" />

      <Button sx={{margin: 0}} size="small" variant="contained" onClick={() => submitNewInvoice()}>Submit</Button>

    </Box>
  );
}
