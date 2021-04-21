import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Button, Center, Container, Flex, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import { ProductStars } from "../components/ProductReviews";
import { AddToCart } from "../components/AddToCart";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [error, setError] = useState();
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (addingToCart) {
      timeoutId = setTimeout(() => {
        setAddingToCart(false);
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [addingToCart]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProduct(data.find((p) => p.id === parseInt(params.productId))))
      .catch((error) => setError(error));
  }, [params.productId]);

  const onAddToCart = (_productAdded, _qty) => {
    setAddingToCart(true);
  };

  if(error){
      return(<Container maxW="container.xl"><div>Not such product ({error})</div></Container>);
  }
  if(!product){
      return(<Container maxW="container.xl"><div>Loading</div></Container>);
  }

  return (
    <Container maxW="container.xl">
      <Flex align="center" justify="center" spacing="24px">
        <Center>
          <Box boxSize="sm">
            <Image src={`/${product.image}`} alt={product.name} />
          </Box>
        </Center>
        <Box>
          <Heading mb={4}>{product.name}</Heading>
          <Box>
            <ProductStars rating={product.rating || 0} />
          </Box>
          <Flex justify="space-between" spacing="24px">
            <VStack align="left">
              <Box>
                <Text>As low as</Text>
              </Box>
              <Box>
                <Text align="left">
                  €{parseFloat(product.price).toFixed(2, 10)}
                </Text>
              </Box>
            </VStack>
            <VStack align="right">
              <Text>IN STOCK</Text>
              <Text>SKU# PROD_{product.id}</Text>
            </VStack>
          </Flex>
          {addingToCart ? (
            <Button disabled>Adding...</Button>
          ) : (
            <AddToCart product={product} qty={1} handleClick={onAddToCart} />
          )}
        </Box>
      </Flex>

      <Tabs>
        <TabList>
          <Tab>Details</Tab>
          <Tab>More Info</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>{product.name}</p>
          </TabPanel>
          <TabPanel>
            <p>{product.description}</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <VStack>
        <Heading>We found other products you might like!</Heading>
        <Box>Related products component</Box>
      </VStack>
    </Container>
  );
}

export default ProductDetails;
