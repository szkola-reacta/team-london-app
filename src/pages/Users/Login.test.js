import { act } from "react-dom/test-utils";
import * as UserContextModule from "../../components/Contexts/User/UserContext";
import Login from "./Login";
import { fireEvent, render } from "@testing-library/react";

describe("SignIn", () => {
  
  test("calls the loginUser from Context if form valid", async () => {
    const dispatchStub = jest.fn();

    const value = {
      state: { submitting: false, isAuthenticated: false },
      dispatch: dispatchStub,
    };

    jest
      .spyOn(UserContextModule, "useUserContext")
      .mockImplementation(() => value);

    const { getByLabelText, getByRole } = render(
      <Login />,
      { value }
    );

    const spyObj = jest.spyOn(UserContextModule, "loginUser");
    await act(async () => {
      fireEvent.change(getByLabelText("Login"), {
        target: { value: "somelogin " },
      });
      fireEvent.change(getByLabelText("Password"), {
        target: { value: "somePass" },
      });
    });

    await act(async () => {
      fireEvent.click(getByRole("button"));
    });

    expect(spyObj).toBeCalledTimes(1);
    expect(spyObj).toBeCalledWith(dispatchStub, "somelogin ", "somePass");
  });

  
  test("should just show the errors if form not valid", async () => {
    const dispatchStub = jest.fn();

    const value = {
      state: { submitting: false, isAuthenticated: false },
      dispatch: dispatchStub,
    };

    jest
      .spyOn(UserContextModule, "useUserContext")
      .mockImplementation(() => value);

    const { getByLabelText, getByRole } = render(<Login />, { value });

    const spyObj = jest.spyOn(UserContextModule, "loginUser");
    await act(async () => {
      fireEvent.change(getByLabelText("Login"), {
        target: { value: "somelogin " },
      });
      fireEvent.change(getByLabelText("Password"), {
        target: { value: "" },
      });
    });

    await act(async () => {
      fireEvent.click(getByRole("button"));
    });

    expect(spyObj).not.toBeCalled();
  });

});
