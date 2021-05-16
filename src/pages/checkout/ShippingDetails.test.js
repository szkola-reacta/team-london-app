import configureStore from "redux-mock-store";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router";
import ShippingDetails from "./ShippingDetails";
import { shallow } from "enzyme";
import { testStore } from "../../store/store";

//todo fix the tests :-)

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

    act(() => {
      // fireEvent.click(screen.getByText(/Next/i));
    });

    expect(history.location.pathname).toBe("/checkout/payment");
  });
  test("should redirect to shipping_details enzyme", async () => {
    const history = createMemoryHistory({
      initialEntries: ["/checkout/shipping_details"],
    });
    // const wrapper = shallow(
    //   <Provider store={store}>
    //     <ShippingDetails />
    //   </Provider>
    // );

    const store = testStore({
      checkout: {
        countryId: 1,
        shippingMethodId: 10,
        shippingFormData: {
          firstName: "some name",
        },
      },
    });

    const wrapper = shallow(<ShippingDetails store={store} />)
      .childAt(0)
      .dive();

    wrapper.find("#test").to.have.lengthOf(1);
    act(() => {
      fireEvent.click(screen.getByText(/Next/i));
    });

    expect(history.location.pathname).toBe("/checkout/payment");
  });
});
