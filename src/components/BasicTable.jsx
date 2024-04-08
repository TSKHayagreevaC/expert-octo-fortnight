import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function createData(name, purchase, cost, tax, total) {
  return { name, purchase, cost, tax, total };
}

const rows = [
  createData('person_one', 159, 6.0, 24, 4.0),
  createData('person_two', 237, 9.0, 37, 4.3),
];

export default function BasicTable({invoicesList}) {
  const parsedInvoicesList = invoicesList ? JSON.parse(invoicesList) : [];
  return (
    <TableContainer component={Paper}>
      {parsedInvoicesList.length
      ?
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(parsedInvoicesList[0]).map((ele) => 
              <TableCell>{ele}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {parsedInvoicesList.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/invoices/${row.Id}`}>
                  {row.Id}
                </Link>
              </TableCell>
              <TableCell>{row.itemName}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      :
      <Box>
        <Typography>No Invoices Available..!</Typography>
        <Link to={`/invoices/new`}>
            Create Invoice
        </Link>
      </Box>
      }
    </TableContainer>
  );
}
