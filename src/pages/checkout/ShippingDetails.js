import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionTypes } from "../../components/Checkout";

function ShippingDetails() {
  const [proceedToNextStep, goToNextStep] = useState(false);
  const dispatch = useDispatch();
  const shippingFormData = useSelector(
    (state) => state.checkout.shippingFormData
  );
  const countryId = useSelector((state) => state.checkout.countryId);
  const setCountryId = useCallback(
    (id) =>
      dispatch({ type: actionTypes.CHECKOUT_SET_COUNTRY_ID, payload: id }),
    [dispatch]
  );
  const shippingMethodId = useSelector(
    (state) => state.checkout.shippingMethodId
  );
  const setShippingMethodId = useCallback(
    (id) =>
      dispatch({
        type: actionTypes.CHECKOUT_SET_SHIPPING_METHOD_ID,
        payload: id,
      }),
    [dispatch]
  );

  const setFormData = useCallback(
    (data) => {
      dispatch({ type: actionTypes.CHECKOUT_SET_FORM_DATA, payload: data });
      goToNextStep(true);
    },
    [dispatch]
  );

  // just for testing / mocking START
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // just for testing / mocking END

  if (proceedToNextStep) {
    return <Redirect to="/checkout/payment" />;
  }

  function requiredValidator(value) {
    if (!value) {
      return "Is required";
    }

    return true;
  }
  return (
    <Container maxW="container.xl">
      <Flex wrap="wrap">
        <Box w="100%">{`<CheckoutProgress step="1" />`}</Box>
        <Box w={{ base: "100%", md: "70%" }}>
          <Box>{`<UserDataForm values={${shippingFormData}} onCountryChange={${setCountryId}} onSubmit={setFormData} />`}</Box>
          {/* just for testing before there is no UserDataForm */}
          <form id="userDataForm" onSubmit={handleSubmit(setFormData)}>
            <FormControl isInvalid={errors.firstName}>
              <FormLabel htmlFor="firstName">
                Just testing / mocking UserDataForm
              </FormLabel>
              <Input
                defaultValue={shippingFormData.firstName}
                placeholder="first name"
                {...register("firstName", { validate: requiredValidator })}
              />
            </FormControl>
          </form>
          <Box>{`<ShippingMethod id={${shippingMethodId}} countryId={${countryId}} onShippingMethodChange={${setShippingMethodId}} />`}</Box>
          <Box textAlign="right">
            <Button
              id="test"
              type="submit"
              form="userDataForm"
              colorScheme="teal"
            >
              Next
            </Button>
          </Box>
        </Box>
        <Box display={{ base: "none", md: "initial" }} w="30%">
          <Box>{`<OrderSummaryCard items={cartItems}? />`}</Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default ShippingDetails;
