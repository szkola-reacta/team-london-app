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
    </div>
  );
}

export default App;
