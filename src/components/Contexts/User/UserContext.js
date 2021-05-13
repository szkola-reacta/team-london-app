// use
// https://www.freecodecamp.org/news/state-management-with-react-hooks/
// https://kentcdodds.com/blog/how-to-use-react-context-effectively

import React, { useReducer } from "react";
import axios from "axios";
import userContextReducer from "./userContextReducer";

const UserContext = React.createContext();

const getUser = () => JSON.parse(localStorage.getItem("user"));
const getAccessToken = () => localStorage.getItem("accessToken");
const isAuthenticated = () => getUser() && getAccessToken();

const initialState = {
  isAuthenticated: isAuthenticated(),
  user: isAuthenticated ? getUser() : null,
  accessToken: isAuthenticated ? getAccessToken() : null,
  submitting: false,
  error: null,
};


async function loginUser(dispatch, login, password) {

  dispatch({ type: "USER.SIGN_IN_STARTED" });
  await axios
    .post("/login", {
      login: login,
      password: password,
    })
    .then((res) => {
      dispatch({
        type: "USER.SIGN_IN",
        payload: {
          user: { login, name: login },
          accessToken: "Sometoken here",
        },
      });
    })
    .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch({
        type: "USER.ERROR",
        payload: error.response.data.errorMessage,
      });
    }else{
      dispatch({
        type: "USER.ERROR",
        payload: "Cannot perform that action now",
      });
    }
  });

}


function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userContextReducer, initialState);

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context

  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUserContext() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserContext, loginUser, UserContext };
