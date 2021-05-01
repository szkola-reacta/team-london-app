import { default as reducer } from "./userContextReducer";

const baseState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  submitting: false,
  error: null,
};
describe("userContextReducer", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("USER.SIGN_IN", () => {
    it("should store the token and user data in localStorage", () => {
      reducer(baseState, {
        type: "USER.SIGN_IN",
        payload: { user: { some: "data" }, accessToken: "token" },
      });

      expect(localStorage.getItem("user")).not.toBeNull();
      expect(JSON.parse(localStorage.getItem("user"))).toEqual({
        some: "data",
      });
      expect(localStorage.getItem("accessToken")).toEqual("token");
    });

    it("should return correct state", () => {
      expect(
        reducer(baseState, {
          type: "USER.SIGN_IN",
          payload: { user: { some: "data" }, accessToken: "token" },
        })
      ).toEqual({
        ...baseState,
        user: { some: "data" },
        accessToken: "token",
        isAuthenticated: true,
      });
    });

    it("should reset submitting flag and error", () => {
      expect(
        reducer(baseState, {
          type: "USER.SIGN_IN",
          payload: {
            user: { some: "data" },
            accessToken: "token",
            error: "some error",
            submitting: true,
          },
        })
      ).toEqual({
        ...baseState,
        user: { some: "data" },
        accessToken: "token",
        isAuthenticated: true,
        submitting: false,
        error: null,
      });
    });
  });

  describe("USER.SIGN_OUT", () => {
    it("should remove data from localStorage", () => {
      reducer(baseState, {
        type: "USER.SIGN_OUT",
      });

      expect(localStorage.getItem("user")).toBeNull();
      expect(localStorage.getItem("accessToken")).toBeNull();
    });

    it("should update state", () => {
      expect(
        reducer(
          { ...baseState, submitting: true, error: "Some errors" },
          {
            type: "USER.SIGN_OUT",
          }
        )
      ).toEqual(baseState);
    });
  });

  describe("USER.ERROR", () => {
    it("should reset the state and adds the error payload", () => {
      expect(
        reducer(baseState, {
          type: "USER.ERROR",
          payload: "Some errors",
        })
      ).toEqual({ ...baseState, error: "Some errors" });
    });
  });

  describe("USER.SIGN_IN_STARTED", () => {
    it("should change the submitting flag only", () => {
      expect(
        reducer(baseState, {
          type: "USER.SIGN_IN_STARTED",
        })
      ).toEqual({ ...baseState, submitting: true });
    });
  });
});
