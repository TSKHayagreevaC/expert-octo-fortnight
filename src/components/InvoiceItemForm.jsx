import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export default function InvoiceItemForm({details, deleteItem, updateItemsArray}) {
  const navigate = useNavigate();
  const [invoice, setInvoice] = React.useState({});

  const submitNewInvoice = () => {
    updateItemsArray(invoice);
  }

  React.useEffect(() => {
    if (details.Id) {
      setInvoice({...details})
    }
  }, [])

  let condition = invoice.itemName?.length && (invoice.quantity>0) && (invoice.price>0);

  return (
    <Box
      component="form"
      display={`flex`}
      alignItems={`bottom`}
      flexDirection={`center`}
      gap={1}
      noValidate
      autoComplete="off" 
    >
      <TextField size="small" type="string" value={invoice.itemName} variant="outlined" onChange={(e) => setInvoice({...invoice, itemName: e.target.value})} label="Item Name" />
      <TextField size="small" type="number" InputProps={{ inputProps: { min: 0 } }} value={invoice.quantity} variant="outlined" onChange={(e) => setInvoice({...invoice, quantity: e.target.value, amount: e.target.value*invoice.price})} label="Quantity" />
      <TextField size="small" type="number" InputProps={{ inputProps: { min: 0 } }} value={invoice.price} variant="outlined" onChange={(e) => setInvoice({...invoice, price: e.target.value, amount: e.target.value*invoice.quantity})} label="Price" />
      <TextField size="small" type="number" InputProps={{ inputProps: { min: 0 } }} value={invoice.amount} variant="outlined" onChange={(e) => setInvoice({...invoice, amount: e.target.value})} label="Amount" />

      <Button disabled={!condition} sx={{margin: 0, maxWidth:100, textTransform: 'none'}} size="small" variant="contained" onClick={() => submitNewInvoice()}>Add</Button>
      <Button sx={{margin: 0, maxWidth:100, textTransform: 'none'}} size="small" color="error" variant="contained" onClick={() => deleteItem(details.Id)}>Remove</Button>

    </Box>
  );
}
