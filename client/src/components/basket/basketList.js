import React from "react";

import axios from "axios";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import { useSnackbar } from "notistack";

const deleteFromBasketUrl = id => `http://localhost:5000/basket/${id}`;

const BasketList = ({ basket, handleClickRefreshData }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpenSnackbar = (name, variant) =>
    enqueueSnackbar(name, { variant });

  const handleClickRemoveFromBasket = id => {
    axios({
      method: "delete",
      data: { id },
      url: deleteFromBasketUrl(id)
    })
      .then(() => handleClickRefreshData())
      .then(() => handleClickOpenSnackbar(`товар удален из корзины`, "success"))
      .catch(e => {
        handleClickOpenSnackbar("не удалось удалить из корзины", "error");
        console.error(e);
      });
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <img
          src={basket.product_url}
          alt=""
          style={{ width: "70px", height: "70px" }}
        />
      </TableCell>
      <TableCell align="center">{basket.product_name}</TableCell>
      <TableCell align="center">{basket.product_price} руб</TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => handleClickRemoveFromBasket(basket.id)}
        >
          убрать из корзины
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default BasketList;
