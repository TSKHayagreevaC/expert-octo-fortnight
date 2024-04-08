import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(name, purchase, cost, tax, total) {
  return { name, purchase, cost, tax, total };
}

const rows = [
  createData('person_one', 159, 6.0, 24, 4.0),
  createData('person_two', 237, 9.0, 37, 4.3),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Purchase</TableCell>
            <TableCell align="right">Cost</TableCell>
            <TableCell align="right">Tax</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/invoices/${row.name}`}>
                    {row.name}
                </Link>
              </TableCell>
              <TableCell align="right">{row.purchase}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.tax}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
