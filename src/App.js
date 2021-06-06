import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductBox } from "./components/ProductBox";
import ProductDetails from "./pages/ProductDetails";

import MainMenu from "./components/MainMenu";
import { Header, Footer } from "./components/Layout";

import Login from "./pages/Users/Login";
import { UserProvider } from "./components/Contexts/User/UserContext";
import Checkout from "./pages/checkout";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Header />
          <MainMenu />
          <Switch>
            <Route path="/product/:productId" component={ProductDetails} />
            <Route path="/search/:searchTerm">We will find something!:)</Route>
            <Route path="/sign-in" component={Login} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
          <ProductBox
            id={1}
            image="media/products/joust-bag.jpeg"
            name="Joust Duffle Bag"
            price="34€"
          />
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
