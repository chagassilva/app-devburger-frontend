//import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from 'react';
import { Row } from './row';
import { api } from '../../../services/api';
import { FilterContainer, FilterOptinsAdmin } from './style';
import { OrderStatusOpions } from './OrdersStatus';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export function Orders() {


  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);
  const [filterorders, setFilterOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);


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
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }



  useEffect(() => {
    const newRows = filterorders.map((order) => createData(order))
    setRows(newRows)
  }, [filterorders]);

  const handleStatus = (status) => {

    if (status.id === 0) {
      setFilterOrders(orders)
      return
    } else {

      const newOrders = orders.filter((order) => order.status === status.value)
      setFilterOrders(newOrders)
    }
    setActiveStatus(status.id);
  }

  useEffect(() => {

    if (activeStatus === 0) {
      setFilterOrders(orders)
    } else {

      const statusIndex = OrderStatusOpions.findIndex((item) => item.id === activeStatus)


      const newFilteredOrders = orders.filter((order) => order.status === OrderStatusOpions[statusIndex].value)
      
      setFilterOrders(newFilteredOrders)

    }

  }, [orders])

  return (
    <>
      <FilterContainer>
        {OrderStatusOpions.map((status) =>
          <FilterOptinsAdmin key={status.id} onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >{status.label}
          </FilterOptinsAdmin>
        )}
      </FilterContainer>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedidos</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data de pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderID} row={row} orders={orders} setOrders={setOrders} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
