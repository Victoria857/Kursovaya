import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";

import { useHistory } from "react-router-dom";

import { useStyles } from "./header.styles";

function Header({ isAuth, setIsAuth }) {
  const classes = useStyles();

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("jwt-token")) {
      setIsAuth(true);
    }
  }, [isAuth, history.action]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Link className={classes.links} to={isAuth ? "/profile" : "/"}>
            <Typography variant="h6" className={classes.title}>
              Интернет Банкинг
            </Typography>
          </Link>
          {isAuth && (
            <>
              <Link className={classes.links} to="/profile/create_card">
                <Typography variant="h6" className={classes.title}>
                  Cоздать карту
                </Typography>
              </Link>
              <Link className={classes.links} to="/profile/products">
                <Typography variant="h6" className={classes.title}>
                  Товары
                </Typography>
              </Link>
              <Link className={classes.links} to="/profile/basket">
                <Typography variant="h6" className={classes.title}>
                  Корзина
                </Typography>
              </Link>
              <Link className={classes.links} to="/profile/news">
                <Typography variant="h6" className={classes.title}>
                  Новости
                </Typography>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
