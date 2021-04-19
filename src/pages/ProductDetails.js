import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Button, Center, Container, Flex, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
          const p = data.find((p) => p.id === parseInt(params.productId));
          setProduct(p);
      })
      .catch((error) => setError(error));

    return () => {};
  }, [params.productId]);

  if(error){
      return(<div>Not such product ({error})</div>);
  }
  if(!product){
      return(<div>Loading</div>);
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

          <Button colorScheme="blue">Add to Cart Comp (todo)</Button>
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
