import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import { Row } from '../Orders/row';
import { useEffect } from "react"
import { api } from "../../../services/api"
import { Container, EditButton, ProductImage } from "./style.js"
import { Pencil } from '@phosphor-icons/react/dist/ssr';
import { formatPrice } from '../../../utils/formatPrice.js';
import { ProductImageAdmin } from '../Orders/style.js';
import { func } from 'prop-types';
import { CheckCircle, XCircle } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';




export function Product() {

  const [products, setProducts] = React.useState([])
  const navigate = useNavigate();

  useEffect(() => {

    async function loadproducts() {
      const { data } = await api.get('/products')
      setProducts(data);
    }
    loadproducts()
  }, [])

  function isOffer(offer) {


    if (offer) {
      return <CheckCircle color='#61a120' size={25} />
    } else {
      return <XCircle color='#ff3205' size={25} />
    }
  }

  function editProduct(product) {

    navigate("/admin/editar-produto", { state: { product } })

  }



  return (
    <Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell align="center">Imagem do produto</TableCell>
              <TableCell align="center">Editar produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center">{formatPrice(product.price)}</TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell align="center" >
                  <ProductImageAdmin src={product.url} alt={product.name} />
                </TableCell>
                <TableCell align="center">
                  <EditButton onClick={() => editProduct(product)}><Pencil /></EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Container>
  )

}