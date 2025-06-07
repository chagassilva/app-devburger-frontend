
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Row} from './row';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';




export default function Orders() {

  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);
  

  useEffect(() => {
    async function loadorders() {
     const { data } = await api.get('/orders')
     setOrders(data)   
    }
    loadorders() 
  }, []);

  function createData(order) {
      return {
        name: order.user.name,
        orderID: order._id,
        date: order.creaedAt,
        status: order.status,
        Products: order.products,          
      };
    }

  
  useEffect(() => {
    const newRows = orders.map((order) => { createData(order)     
    })
    setRows(newRows)
  }, [orders]);
  

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}