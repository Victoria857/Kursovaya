import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import Container from "@material-ui/core/Container";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

import { useStyles } from "./currencyList.styles";

const CURRENCY_URL =
  "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD";
export default function Currency() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    async function getFetch() {
      const result = await axios(CURRENCY_URL);
      setCurrency(result.data.Data);
    }
    getFetch();
  }, []);
  console.log(currency);
  const classes = useStyles();
  console.log(currency);
  return (
    <Container maxWidth="md">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell align="center">наименование валюты</TableCell>
              <TableCell align="center">логотип</TableCell>
              <TableCell align="center">Цена</TableCell>
              {/* <TableCell align="center"></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {currency.map((item, id) => (
              <TableRow key={item.CoinInfo.Id}>
                <TableCell component="th" scope="row">
                  {id + 1}
                </TableCell>
                <TableCell align="center">{item.CoinInfo.FullName}</TableCell>
                <TableCell align="center">
                  <img
                    src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`}
                    alt=""
                    className={classes.currencyLogo}
                  />
                </TableCell>
                <TableCell align="center">{item.DISPLAY.USD.PRICE}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
