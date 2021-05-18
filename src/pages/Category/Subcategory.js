import { Button } from "@chakra-ui/button";
import { Box, Code, Container, Flex, Heading, Link } from "@chakra-ui/layout";
import { Link as RouterLink, useParams } from "react-router-dom";
import { ProductBox } from "../../components/ProductBox";

function Subcategory() {
  const { categoryId } = useParams();
  return (
    <Container maxW="container.xl">
      <Heading as="h1">Subcategory (TL-?)</Heading>
      <div>
        {`<Breadcrumbs (TL-?)>`}
        {
          <Link as={RouterLink} to="/">
            Home
          </Link>
        }{" "}
        |
        {
          <Link as={RouterLink} to="/category">
            CategoryName
          </Link>
        }
        <Link to="#">Subcategory: {categoryId}</Link>
        {`</Breadcrumbs>`}
      </div>
      <Flex>
        <Box w={{ md: "80%" }} order={{ md: 2 }}>
          <div>
            <Code>
              {`<ProductsList (TL-?)>`}
              <Flex>
                <ProductBox
                  id={1}
                  image="media/products/joust-bag.jpeg"
                  name="Joust Duffle Bag"
                  price="34€"
                />
                <ProductBox
                  id={1}
                  image="media/products/summit-backpack.jpeg"
                  name="Other Bag"
                  price="15€"
                />
              </Flex>

              <br />
              {`<Pagination (TL-33)/>`}
              <br />
              {`</ProductsList>`}
            </Code>
          </div>
          <div>
            <Code>{`<Bestsellers (TL-?)>`}</Code>
          </div>
        </Box>
        <Box w={{ md: "20%" }} order={{ md: 1 }}>
          {`<ProductFilters TL-? />`}
        </Box>
      </Flex>
    </Container>
  );
}

export default Subcategory;
