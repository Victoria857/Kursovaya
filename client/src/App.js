import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";

import Home from "./components/home/home";

import News from "./components/news/news";
import Products from "./components/productList/products";
import Basket from "./components/basket/basket";

import { useStyles } from "./components/main/main.styles";

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <main className={classes.main}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// function Home() {
//   return <h2>Главная</h2>;
// }
