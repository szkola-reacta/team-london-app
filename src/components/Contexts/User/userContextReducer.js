export default function userContextReducer(state, action) {
  switch (action.type) {
    case "USER.SIGN_IN_STARTED": {
      return {
        ...state,
        submitting: true,
      };
    }
    case "USER.SIGN_IN": {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem(
        "accessToken",
        action.payload.accessToken
      );
      return {
        ...state,
        isAuthenticated: true,
        submitting: false,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    }
    case "USER.SIGN_OUT": {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        accessToken: null,
        error: null,
        submitting: false
      };
    }
    case "USER.ERROR": {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        accessToken: null,
        submitting: false,
        error: action.payload,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
