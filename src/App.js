import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

import MainMenu from "./components/MainMenu";
import { Header, Footer } from "./components/Layout";

import Login from "./pages/Users/Login";
import { UserProvider } from "./components/Contexts/User/UserContext";
import { Category, Cart, Subcategory, HomePage } from "./pages";
import Checkout from "./pages/checkout";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Header />
          <MainMenu />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route path="/search/:searchTerm">We will find something!:)</Route>
            <Route path="/sign-in" component={Login}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/checkout" component={Checkout} />
            <Route path="/:categoryName" exact component={Category} />
            <Route path="/:categoryName/:categoryId" component={Subcategory} />
          </Switch>

          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
