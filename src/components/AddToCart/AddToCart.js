import { Button } from '@chakra-ui/react';
const AddToCart = ({ handleClick, product, qty }) => {
  return (
    <Button onClick={() => handleClick(product, qty)}>Add To Cart</Button>
  );
}

AddToCart.defaultProps = {
  qty: 1
}
export default AddToCart;