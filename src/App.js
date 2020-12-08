import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import ProductList from "./Pages/productList";
import Posts from "./Pages/posts";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/product">
            <div className="App">
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
              <ProductList />
            </div>
          </Route>
        </Switch>
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
        <Switch></Switch>
      </BrowserRouter>
    </Provider>
  );
}
