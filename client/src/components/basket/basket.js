import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "@material-ui/core/Table";
import Container from "@material-ui/core/Container";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

import { useStyles } from "./basketList.style";

import BasketList from "./basketList";

const amountCounter = arr =>
  arr.reduce((total, nextElm) => total + nextElm.product_price, 0);

const BASKET_URL = "http://localhost:5000/basket";

const Basket = () => {
  const [basket, setBasket] = useState([]);

  const [amount, setAmount] = useState(0);

  async function fetchBasketData(URL) {
    const result = await axios.get(URL);
    const countAmount = amountCounter(result.data).toFixed(2);
    setAmount(countAmount);
    setBasket([...result.data]);
  }

  useEffect(() => {
    fetchBasketData(BASKET_URL);
  }, []);

  const handleClickRefreshData = () => {
    fetchBasketData(BASKET_URL);
  };

  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Button
        style={{ marginBottom: "30px" }}
        color="default"
        variant="contained"
        onClick={() => handleClickRefreshData()}
      >
        <RefreshIcon />
      </Button>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <caption>
            Общая стоймость:{" "}
            <span className={classes.captionSpan}>{amount}</span> руб.
          </caption>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Имя продукта</TableCell>
              <TableCell align="center">Цена</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.length ? (
              basket.map((item, id) => (
                <BasketList
                  key={id}
                  basket={item}
                  handleClickRefreshData={handleClickRefreshData}
                />
              ))
            ) : (
              <TableRow>
                <TableCell className={classes.tableCell} colSpan="4">
                  Корзина пуста
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        color="primary"
        variant="contained"
        className={classes.confirmButton}
      >
        Совершить покупку
      </Button>
    </Container>
  );
};

export default Basket;
