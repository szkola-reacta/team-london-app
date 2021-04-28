import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductBox } from './components/ProductBox';
import ProductDetails from "./pages/ProductDetails";

import MainMenu from "./components/MainMenu";
import { Header } from "./components/Layout";
import { Footer } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainMenu />
        <Switch>
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/search/:searchTerm">We will find something!:)</Route>
        </Switch>
        <ProductBox
          id={1}
          image="media/products/joust-bag.jpeg"
          name="Joust Duffle Bag"
          price="34€"
        />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
