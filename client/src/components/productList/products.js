import React, { useEffect, useState } from "react";

import axios from "axios";

import ProductList from "./productList";

import Table from "@material-ui/core/Table";
import Container from "@material-ui/core/Container";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";

import { useStyles } from "./productList.styles";

export default function Products({ handleClickSetSnackBarOpen }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getFetch() {
      const result = await axios.get("http://localhost:5000/products");
      setRows(result.data);
      console.log(result.data);
    }
    getFetch();
  }, []);

  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Имя продукта</TableCell>
              <TableCell align="center">Цена</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <ProductList
                key={row.id}
                id={row.id}
                productName={row.product_name}
                productPrice={row.product_price}
                productUrl={row.product_image}
                handleClickSetSnackBarOpen={handleClickSetSnackBarOpen}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
