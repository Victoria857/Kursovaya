import React from "react";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";

import { useStyles } from "./header.styles";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link className={classes.links} to="/">
            <Typography variant="h6" className={classes.title}>
              Интернет Банкинг
            </Typography>
          </Link>
          <Link className={classes.links} to="/news">
            <Typography variant="h6" className={classes.title}>
              Новости
            </Typography>
          </Link>
          <Link className={classes.links} to="/products">
            <Typography variant="h6" className={classes.title}>
              Товары
            </Typography>
          </Link>
          <Link className={classes.links} to="/basket">
            <Typography variant="h6" className={classes.title}>
              Корзина
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
