import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignInPage: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputChangeEmail = (e) => setInputEmail(e.target.value);
  const handleInputChangePassword = (e) => setInputPassword(e.target.value);

  const isErrorEmail = inputEmail === "";
  const isErrorPassword = inputPassword === "";

  return (
    <div>
      <h1 className="text-xl text-center">Welcome to BeHome's!</h1>

      <form className="max-w-md mx-auto mt-20">
        <FormControl isInvalid={isErrorEmail}>
          <InputGroup className="mb-5">
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="tel"
              size="md"
              placeholder="behome@email.com"
              onChange={handleInputChangeEmail}
            />
          </InputGroup>
          {!isErrorEmail ? (
            ""
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={isErrorPassword}>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none" fontSize="1.2em">
              <LockIcon color="gray.300" />
            </InputLeftElement>

            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="password"
              onChange={handleInputChangePassword}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {!isErrorPassword ? (
            ""
          ) : (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>

        <button
          className="bg-primary-red p-2 w-full text-white rounded-lg mt-5 font-bold"
          disabled={
            (isErrorEmail && isErrorPassword) || isErrorEmail || isErrorPassword
          }
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
