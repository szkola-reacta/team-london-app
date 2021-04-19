import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import { ProductBox } from './components/ProductBox';

import MainMenu from "./components/MainMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/"></Route>
        </Switch>
      </Router>
      <ProductBox
        id={1}
        image="media/products/joust-bag.jpeg"
        name="Joust Duffle Bag"
        price="34€"
      />
        <MainMenu/>
    </div>
  );
}

export default App;
