import { Box, Code, Container, Flex, Heading, Link } from "@chakra-ui/layout";
import { useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { ProductBox } from "../../components/ProductBox";

function Category() {
  const { categoryName } = useParams();
  return (
    <Container maxW="container.xl">
      <Heading as="h1">Category (TL-?)</Heading>
      <div>
        {`<Breadcrumbs (TL-?)>`}
        {
          <Link as={RouterLink} to="/">
            Home
          </Link>
        }{" "}
        |
        {
          <Link as={RouterLink} to="#">
            {categoryName}
          </Link>
        }
        {`</Breadcrumbs>`}
      </div>
      <Flex>
        <Box w={{ md: "80%" }} order={{ md: 2 }}>
          <div>
            <Code>{`<Komponent Banner (TL-16) />`}</Code>
          </div>
          <div>
            <Code>
              {`<Bestsellers (TL-?)>`}

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
              {`</Bestsellers>`}
            </Code>
          </div>
        </Box>
        <Box w={{ md: "20%" }} order={{ md: 1 }}>
          {`<SubcategoriesList />`}
        </Box>
      </Flex>
    </Container>
  );
}

export default Category;
