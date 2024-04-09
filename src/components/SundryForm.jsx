import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function SundryForm({details, deleteSundry, updateSundrysArray}) {
  const navigate = useNavigate();
  const [invoice, setInvoice] = React.useState({
            Id: "",
            billSundryName: "",
            amount: 0
   
  });

  const submitNewInvoice = () => {
    updateSundrysArray(invoice);
  }

  React.useEffect(() => {
    if (details.Id) {
      setInvoice({...details})
    }
  }, [])

  const condition = invoice.billSundryName?.length && invoice.amount>0

  return (
    <Box
      component="form"
      display={`flex`}
      alignItems={`bottom`}
      flexDirection={`center`}
      sx={{
        '& > :not(style)': { mr: 1, width: '20ch' },
      }}
      noValidate
      autoComplete="off" 
    >
      <TextField size='small' type="string" value={invoice.billSundryName} variant="outlined" onChange={(e) => setInvoice({...invoice, billSundryName: e.target.value})} label="Bill Sundry Name" />
      <TextField size='small' type="number" InputProps={{ inputProps: { min: 0} }} value={invoice.amount} variant="outlined" onChange={(e) => setInvoice({...invoice, amount: e.target.value})} label="Amount" />

      <Button disabled={!condition} sx={{margin: 0, maxWidth:50, textTransform: 'none'}} size="small" variant="contained" onClick={() => submitNewInvoice()}>Add</Button>
      <Button sx={{margin: 0, maxWidth:50, textTransform: 'none'}} size="small" color="error" variant="contained" onClick={() => deleteSundry(details.Id)}>Remove</Button>

    </Box>
  );
}
