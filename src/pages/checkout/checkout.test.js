import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router";
import Checkout from "./checkout";

const mockStore = configureStore([]);
let store;

describe("index", () => {
  beforeEach(() => {
    store = mockStore({
      checkout: {
        countryId: 1,
        shippingMethodId: 10,
        shippingFormData: {},
      },
    });
  });
  test("should redirect to shipping_details", () => {
    const history = createMemoryHistory({ initialEntries: ["/checkout"] });
    render(
      <Provider store={store}>
        <Router history={history}>
          <Checkout />
        </Router>
      </Provider>
    );
    expect(history.location.pathname).toBe("/checkout/shipping_details");
  });
});
