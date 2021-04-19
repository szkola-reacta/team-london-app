import { StarIcon } from "@chakra-ui/icons";
import { Fragment } from "react";

function ProductStars({ rating }) {
  const count = parseInt(rating);

  return (
    <div>
      {[...Array(5).keys()].map((i) => (
        <Fragment key={i}>
          <StarIcon color={i < count ? "red.500" : "gray.500"} />
        </Fragment>
      ))}
    </div>
  );
}

export default ProductStars;
