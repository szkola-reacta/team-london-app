const INITIAL_STATE = {
  countryId: 1,
  shippingMethodId: 10,
  shippingFormData: {},
};

const CHECKOUT_SET_COUNTRY_ID = "CHECKOUT/SET_COUNTRY_ID";
const CHECKOUT_SET_SHIPPING_METHOD_ID = "CHECKOUT/SET_SHIPPING_METHOD_ID";
const CHECKOUT_SET_FORM_DATA = "CHECKOUT/SET_FORM_DATA";

export const actionTypes = {
  CHECKOUT_SET_COUNTRY_ID,
  CHECKOUT_SET_SHIPPING_METHOD_ID,
  CHECKOUT_SET_FORM_DATA,
};

export const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECKOUT_SET_FORM_DATA:
      return {
        ...state,
        shippingFormData: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
