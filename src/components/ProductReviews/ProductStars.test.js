import { StarIcon } from "@chakra-ui/icons";
import { shallow } from "enzyme";
import ProductStars from "./ProductStars";

describe("renders stars!!", () => {
  test("should render total of 5 stars", () => {
    const wrapper = shallow(<ProductStars rating="5" />);

    expect(
      wrapper.containsMatchingElement(<StarIcon color="red.500" />)
    ).toBeTruthy();

    expect(
      wrapper.containsMatchingElement(<StarIcon color="gray.500" />)
    ).toBeFalsy();
  });

  test("should render 3 active stars and 2 disabled", () => {
    const wrapper = shallow(<ProductStars rating="3" />);
    const activeStars = wrapper.find(StarIcon);
    expect(activeStars.length).toBe(5);

    expect(activeStars.find({ color: "red.500" }).length).toBe(3);
    expect(activeStars.find({ color: "gray.500" }).length).toBe(2);
  });
});
