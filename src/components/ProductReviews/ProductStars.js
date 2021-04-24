import { Icon } from "@chakra-ui/icons";
import { Fragment } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

function ProductStars({ rating }) {
  const count = parseInt(rating);

  return (
    <div>
      {[...Array(5).keys()].map((i) => (
        <Fragment key={i}>
          <Icon as={i < count ? FaStar : FaRegStar }  color="red.500" />
        </Fragment>
      ))}
    </div>
  );
}

export default ProductStars;
