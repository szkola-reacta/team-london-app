import { Alert } from "@chakra-ui/alert";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Container, VStack } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import { FaExclamationCircle, FaQuestionCircle } from "react-icons/fa";
import { Redirect } from "react-router";
import {
  useUserContext,
  loginUser
} from "../../components/Contexts/User";



export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    state: { isAuthenticated, submitting, error: loginError },
    dispatch: userContextDispatch,
  } = useUserContext();

  const onSubmit = (data) => {
    loginUser(userContextDispatch, data.login, data.password);
  };
  const displayLoginError = () => {
    if(loginError){
      return (
        <VStack>
          <Alert status="warning">
            <FaQuestionCircle />
            &nbsp; admin ? :)
          </Alert>
          <Alert status="error">
            <FaExclamationCircle />
            &nbsp; {loginError}
          </Alert>
        </VStack>
      );
    }
  }

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Container maxW="container.sm">
      {displayLoginError()}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.login}>
          <FormLabel htmlFor="login">Login</FormLabel>
          <Input
            id="login"
            name="login"
            autoComplete="login"
            placeholder="Your login here"
            {...register("login", {
              required: { value: true, message: "Is required" },
            })}
          />
          <FormErrorMessage>
            {errors.login && errors.login.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Is required" },
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          mt="2"
          isDisabled={submitting}
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </Container>
  );
}
