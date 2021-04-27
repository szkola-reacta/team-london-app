import { Icon } from "@chakra-ui/icons";
import { shallow } from "enzyme";
import { FaRegStar, FaStar } from "react-icons/fa";
import ProductStars from "./ProductStars";

describe("renders stars!!", () => {
  test("should render total of 5 stars", () => {
    const wrapper = shallow(<ProductStars rating="5" />);

    expect(
      wrapper.containsMatchingElement(<Icon as={FaStar} color="red.500" />)
    ).toBeTruthy();

    expect(
      wrapper.containsMatchingElement(<Icon as={FaRegStar} color="red.500" />)
    ).toBeFalsy();
  });

  test("should render 3 active stars and 2 disabled", () => {
    const wrapper = shallow(<ProductStars rating="3" />);
    const activeStars = wrapper.find(Icon);
    expect(activeStars.length).toBe(5);

    expect(activeStars.find({ as: FaStar }).length).toBe(3);
    expect(activeStars.find({ as: FaRegStar }).length).toBe(2);
  });
});
