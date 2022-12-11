import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormErrorMessage,
  Grid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { BodyInterface } from ".";
import { UseInput } from "../../Hooks/UseInput";

import { UseApi } from "../../Hooks/UseApi";
import { SignUp as _SignUp } from "../../Services/lib/Auth";
import Step2, {
  IsDisabled as _IsDisabled,
  validatePassword,
} from "./SubComponents/SignUpStep2";
import Step1 from "./SubComponents/SignUpStep1";

function SignUp({ ChangeHandler, setCred }: BodyInterface) {
  const { value: phoneNumber, setValue: setPhoneNumber } = UseInput();
  const { value: userName, bind: binduserName } = UseInput();
  const { value: password, bind: bindpassword } = UseInput();
  const { value: passwordRepeat, bind: bindpasswordRepeat } = UseInput();
  const { value: dial, setValue: setDial } = UseInput();
  const [isAgreed, setAgreed] = useState(false);
  const [isAgreedValid, setAgreedValid] = useState(false);
  const [isValid, setValid] = useState({
    password: false,
    username: false,
  });
  const [{ isLoading: SignUpIsloading, data }, fetch] = UseApi({
    service: _SignUp,
  });

  const AgreeHandler = () => {
    if (isAgreed) {
      setAgreedValid(false);
      return true;
    } else {
      setAgreedValid(true);
      return false;
    }
  };

  const usernameHandler = () => {
    if (!/\s/g.test(userName)) {
      setValid((p) => {
        return { ...p, username: false };
      });
      return true;
    } else {
      setValid((p) => {
        return { ...p, username: true };
      });
      return false;
    }
  };
  const toast = useToast();
  useEffect(() => {
    if (data) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setCred({
        code: data.code,
        credential: data.credential,
      });
      ChangeHandler("verify");
    }
  }, [data]);

  const passHandler = () => {
    if (passwordRepeat === password) {
      setValid((p) => {
        return { ...p, password: false };
      });
      return true;
    } else {
      setValid((p) => {
        return { ...p, password: true };
      });
      return false;
    }
  };

  const StepHandler = (e: FormEvent) => {
    e.preventDefault();
    if (passHandler() && usernameHandler() && AgreeHandler())
      fetch({
        email: phoneNumber,
        userName,
        password,
        // countryCode: `+${dial}`,
      });
  };

  const IsDisabled = () => {
    return (
      phoneNumber === "" ||
      password === "" ||
      passwordRepeat === "" ||
      userName === "" ||
      !_IsDisabled(validatePassword(password))
    );
  };

  const Step2Props = {
    bindpassword,
    binduserName,
    bindpasswordRepeat,
    isValid,
  };

  return (
    <form autoComplete="off" onSubmit={StepHandler}>
      <Stack>
        <Step1 setDial={setDial} setValue={setPhoneNumber} />
        <Step2 {...Step2Props} />
        <FormControl maxW="90%" isInvalid={isAgreedValid}>
          <Checkbox
            isChecked={isAgreed}
            onChange={(e) => setAgreed(e.target.checked)}
          >
            <Text fontSize="12px" textAlign="center">
              I agree to the terms of service and privacy policy
            </Text>
          </Checkbox>
          <FormErrorMessage>
            You must agree with our to terms of service and privacy policy to
            create account
          </FormErrorMessage>
        </FormControl>
        <Button
          isLoading={SignUpIsloading}
          isDisabled={IsDisabled()}
          type="submit"
        >
          {"Sign Up"}
        </Button>
        <Divider />
        <Button
          isDisabled={SignUpIsloading}
          variant="ghost"
          onClick={() => ChangeHandler("login")}
        >
          {"Login"}
        </Button>
      </Stack>
    </form>
  );
}

export default SignUp;
