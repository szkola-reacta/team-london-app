import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductBox } from './components/ProductBox';
import ProductDetails from "./pages/ProductDetails";

import MainMenu from "./components/MainMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <MainMenu/>
        <Switch>
          <Route path="/product/:productId" component={ProductDetails}/>
        </Switch>
      </Router>
      <ProductBox
        id={1}
        image="media/products/joust-bag.jpeg"
        name="Joust Duffle Bag"
        price="34€"
      />
    </div>
  );
}

export default App;
