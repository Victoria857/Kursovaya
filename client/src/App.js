import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";

import Auth from "./components/auth/auth";

import News from "./components/news/news";
import Products from "./components/productList/products";
import Basket from "./components/basket/basket";
import createCard from "./components/createCard/createCard";

import { useStyles } from "./components/main/main.styles";

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <main className={classes.main}>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/create_card" component={createCard} />
          <Route path="/products" component={Products} />
          <Route path="/basket" component={Basket} />
          <Route path="/news" component={News} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
