import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/"></Route>
        </Switch>
      </Router>
      {/* <ProductBox
        id={1}
        image="media/products/joust-bag.jpeg"
        name="Joust Duffle Bag"
        price="34€"
      /> */}
    </div>
  );
}

export default App;
