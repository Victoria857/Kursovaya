import React from "react";

import axios from "axios";

import { useSnackbar } from "notistack";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";

const ProductList = ({ id, productName, productPrice, productUrl }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpenSnackbar = (name, variant) =>
    enqueueSnackbar(name, { variant });

  const handleClickAddToBasket = (productName, productPrice, productUrl) => {
    // handleClickOpenSnackbar(productName, "success");

    axios({
      method: "post",
      url: "http://localhost:5000/api/basket",
      data: {
        productName,
        productPrice,
        productUrl,
      },
    })
      .then(() =>
        handleClickOpenSnackbar("товар был добавлен в корзину", "success")
      )
      .catch((e) => {
        handleClickOpenSnackbar("не удалось добавить в корзину", "error");
        console.error(e);
      });
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <img
          src={productUrl}
          alt=""
          style={{ width: "70px", height: "70px" }}
        />
      </TableCell>
      <TableCell align="center">{productName}</TableCell>
      <TableCell align="center">{productPrice} руб</TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          size="small"
          color="default"
          onClick={() =>
            handleClickAddToBasket(productName, productPrice, productUrl)
          }
        >
          Добавить в карзину
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ProductList;
