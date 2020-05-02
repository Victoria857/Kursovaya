import React, { useState } from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";

import Auth from "./components/auth/auth";

import News from "./components/news/news";
import Products from "./components/productList/products";
import Basket from "./components/basket/basket";
import createCard from "./components/createCard/createCard";

import { useStyles } from "./components/main/main.styles";
import Profile from "./components/profile/profile";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const classes = useStyles();

  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <main className={classes.main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Auth isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            exact
            path="/profile"
            render={() => <Profile setIsAuth={setIsAuth} />}
          />
          <Route path="/profile/create_card" component={createCard} />
          <Route path="/profile/products" component={Products} />
          <Route path="/profile/basket" component={Basket} />
          <Route path="/profile/news" component={News} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
