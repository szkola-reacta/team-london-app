import React from "react";
import { Link } from "@chakra-ui/react";
import { Link as RouterLink} from 'react-router-dom'
import { useUserContext } from "../Contexts/User";


export default function UserWelcomeBar() {
  const { state: userContextState,dispatch: userContextDispatch } = useUserContext();

  if (userContextState?.isAuthenticated) {
    return (
      <React.Fragment>
        Hi {userContextState.user.name},{" "}
        <Link
          onClick={() => {
            userContextDispatch({ type: "USER.SIGN_OUT" });
          }}
        >
          Sign Out
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Link as={RouterLink} to="/sign-in">
          Sign In
        </Link>
      </React.Fragment>
    );
  }
}
