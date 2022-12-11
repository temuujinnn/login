import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BodyInterface } from ".";

import { UseApi } from "../../Hooks/UseApi";

import { SignIn as _SignIn } from "../../Services/lib/Auth";
import { UseInput } from "../../Hooks/UseInput";
import { FormEvent, useEffect } from "react";
import { useUser } from "../../Context/UserContext";

function SignIn({ ChangeHandler, setCred }: BodyInterface) {
  const { bind: userNameBind, value: credential } = UseInput();
  const { bind: passwordBind, value: password } = UseInput();
  const { dispatcher } = useUser();
  const [{ data, isLoading }, fetch] = UseApi({
    service: _SignIn,
  });
  const toast = useToast();

  useEffect(() => {
    if (data) {
      console.log(data);
      if (data.code) {
        setCred({
          code: data.code,
          credential: data.credential,
        });
      } else {
        const { accessToken, refreshToken } = data;
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        dispatcher({
          type: "login",
          state: {
            token: accessToken,
            refresh_token: refreshToken,
          },
        });
      }
    }
  }, [data]);

  const IsDisabled = () => {
    return credential === "" || password === "";
  };

  const Handler = (e: FormEvent) => {
    e.preventDefault();
    fetch({ email: credential, password });
  };

  return (
    <Stack as="form" onSubmit={Handler}>
      <FormControl>
        <FormLabel>{"E-Mail"}</FormLabel>
        <Input {...userNameBind} type="username" />
      </FormControl>
      <FormControl>
        <HStack alignItems="flex-start" justifyContent="space-between">
          <FormLabel>{"Password"}</FormLabel>
        </HStack>
        <Input {...passwordBind} type="password" />
      </FormControl>
      <Button isDisabled={IsDisabled()} type="submit" isLoading={isLoading}>
        {"Login"}
      </Button>
      <Divider />
      <Button
        isDisabled={isLoading}
        variant="ghost"
        onClick={() => ChangeHandler("sign-up")}
      >
        {"Sign Up"}
      </Button>
    </Stack>
  );
}

export default SignIn;
