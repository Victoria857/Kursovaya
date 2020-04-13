import React, { useState, useEffect } from "react";

import axios from "axios";

// import SignIn from "../signin/signin";
// import SignUp from "../signup/signup";
// import CreateCard from "../createCard/createCard";
import Products from "../productList/products";
// import News from "../news/News";
// import Currency from "../currency/currency";

import Snackbar from "@material-ui/core/Snackbar";

import { useStyles } from "./main.styles";

function Main() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleClickSetSnackBarOpen = () => {
    setOpen(true);
  };

  const handleClickSetSnackBarClose = () => setOpen(false);

  return (
    <main className={classes.main}>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        onClose={handleClickSetSnackBarClose}
        message="Продукт был добавлен в корзину!"
      />
      {/* <SignUp />
      <SignIn />
      <CreateCard />
      <Currency />
      <News /> */}
      <Products handleClickSetSnackBarOpen={handleClickSetSnackBarOpen} />
    </main>
  );
}

export default Main;
