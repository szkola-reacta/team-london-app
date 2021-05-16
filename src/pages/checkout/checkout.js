import { Redirect, Route, Switch } from "react-router";
import { ShippingDetails, Payments } from ".";

function Checkout() {
  return (
    <Switch>
      <Route path="/checkout" exact>
        <Redirect to="/checkout/shipping_details" />
      </Route>
      <Route path="/checkout/shipping_details" component={ShippingDetails} />
      <Route path="/checkout/payment" component={Payments} />
    </Switch>
  );
}

export default Checkout;
