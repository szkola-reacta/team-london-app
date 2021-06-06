import configureStore from "redux-mock-store";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router";
import ShippingDetails from "./ShippingDetails";

const mockStore = configureStore([]);
let store;
const initialState = {
  checkout: {
    countryId: 1,
    shippingMethodId: 10,
    shippingFormData: {
      firstName: "some name",
    },
  },
};

describe("redirect to next step", () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("should redirect to shipping_details", async () => {
    const history = createMemoryHistory({
      initialEntries: ["/checkout/shipping_details"],
    });
    await act(async () =>
      render(
        <Router history={history}>
          <Provider store={store}>
            <ShippingDetails />
          </Provider>
        </Router>
      )
    );

    await act(async () => {
      fireEvent.click(screen.getByText(/Next/i));
    });

    expect(history.location.pathname).toBe("/checkout/payment");
  });
});
