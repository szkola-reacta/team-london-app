import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Payments() {
  const shippingFormData = useSelector(
    (state) => state.checkout.shippingFormData
  );

  return (
    <Container maxW="container.xl">
      <Flex wrap="wrap">
        <Box w="100%">{`<CheckoutProgress step="2" />`}</Box>
        <Box w={{ base: "100%", md: "70%" }}>
          <Box>{`<PaymentMethod />`}</Box>
          <Box textAlign="right">
            <Link to="/checkout/shipping_details">
              <Button colorScheme="teal" variant="outline">
                Back
              </Button>
            </Link>
            <Button colorScheme="teal">Place order</Button>
          </Box>
          <Box>{`<DiscountSection />`}</Box>
        </Box>
        <Box display={{ base: "none", md: "initial" }} w="30%">
          <Box>{`<OrderSummaryCard shipping={{method: "DPD", cost: 14.99}} />`}</Box>
          <Box>{`<ShiptToCard address={{...address, firstName: ${shippingFormData.firstName}}} />`}</Box>
          <Box>{`<ShippingMethodCard name={"DPD"} />`}</Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Payments;
