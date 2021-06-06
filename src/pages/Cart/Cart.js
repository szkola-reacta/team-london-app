import { Button } from "@chakra-ui/button";
import { Box, Code, Container, Flex, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Container maxW="container.xl">
      <Heading as="h1">Cart (TL-14)</Heading>
      <Flex>
        <Box border="ActiveBorder" w={{ md: "70%" }}>
          <form>
            <Code w="100%">
              {" "}
              {`cart.items.map <ProductItem (TL-36) editable />`}
            </Code>
            <Box textAlign="right">
              <Button>Update (TL-38) ? </Button>
            </Box>
          </form>
          <Box>
            <Code>{`<DiscountSection  />`}</Code>
          </Box>
          <Box>
            <Code>{`<ProductMoreChoices />`}</Code>
          </Box>
        </Box>
        <Box display={{ base: "none", md: "block" }} w={{ md: "30%" }}>
          <Box>
            <Code>{`<CartSummary />`}</Code>
          </Box>
          <Box>
            <Button as={Link} to="/checkout/shipping_details">
              ProceedToCheckout
            </Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Cart;
