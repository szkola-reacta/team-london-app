import {useState} from 'react';
import {
    Image,
    Heading,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
    CloseButton
} from '@chakra-ui/react';

import {AddToCart} from '../AddToCart';

import './styles.scss';

const ProductBox = ({id, image, name, price}) => {
    const [addedToCart, setAddedToCart] = useState(false);
    const handleAddToCartClick = (product, qty) => {
        setAddedToCart(true);
    };

    return (
        <Box className="product-box" maxW="sm" overflow="hidden">
            {addedToCart && (
                <Alert status="success">
                    <AlertIcon/>
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

      <Image src={`/${image}`} alt={name} />

            <Box p="5">
                <Heading as="h4" size="md">
                    {name}
                </Heading>
                <p> Price: {price}</p>
                <AddToCart handleClick={handleAddToCartClick} product={id}>Add To Cart</AddToCart>
            </Box>
        </Box>
    );
};

export default ProductBox;
