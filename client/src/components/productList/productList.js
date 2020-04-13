import React from "react";

import axios from "axios";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

const ProductList = ({
  id,
  productName,
  productPrice,
  productUrl,
  handleClickSetSnackBarOpen
}) => {
  //   const [state, setState] = React.useState({
  //     open: false,
  //     vertical: "top",
  //     horizontal: "center"
  //   });
  //   const { vertical, horizontal, open } = state;

  //   const handleClick = newState => () => {
  //     setState({ open: true, ...newState });
  //   };

  const handleClickAddToBasket = (productName, productPrice, productUrl) => {
    console.log(`${productName} has been added`);
    handleClickSetSnackBarOpen();
    axios({
      method: "post",
      url: "http://localhost:5000/basket",
      data: { productName, productPrice, productUrl }
    });
  };

  //   const handleClose = () => {
  //     setState({ ...state, open: false });
  //   };
  return (
    <TableRow>
      {/* <Snackbar message="Продукт был добавлен в корзину" /> */}
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
