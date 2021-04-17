import { useState } from 'react';
import {
  Image,
  Button,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton
} from '@chakra-ui/react';

import './styles.scss';

const ProductBox = ({ id, image, name, price }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const handleAddToCartClick = product => {
    setAddedToCart(true);
  };
  return (
    <Box className="product-box" maxW="sm" overflow="hidden">
      {addedToCart && (
        <Alert status="success">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription display="block">
              Product {name} added to cart
            </AlertDescription>
          </Box>
          <CloseButton
            onClick={() => setAddedToCart(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}

      <Image src={image} />

      <Box p="5">
        <Heading as="h4" size="md">
          {name}
        </Heading>
        <p>Price: {price}</p>
        <Button onClick={() => handleAddToCartClick(id)}>Add To Cart</Button>
      </Box>
    </Box>
  );
};

export default ProductBox;
