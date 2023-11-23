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
import { Link } from "react-router-dom";

const SignInPage: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => setShow(!show);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputChangeEmail = (e) => setInputEmail(e.target.value);
  const handleInputChangePassword = (e) => setInputPassword(e.target.value);

  const isErrorEmail = inputEmail === "";
  const isErrorPassword = inputPassword === "";

  return (
    <div className="mt-4 grow">
      <h1 className="text-3xl text-center">Velkommen til BeHome's!</h1>
      <h3 className="text-lg text-center text-gray-400 mt-2 italic font-bold">
        Log ind her!
      </h3>
      <form className="max-w-md mx-auto mt-10">
        <FormControl isInvalid={isErrorEmail} mb="8" isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="email"
              placeholder="behome@email.com"
              onChange={handleInputChangeEmail}
            />
          </InputGroup>
          <FormErrorMessage
            style={{
              position: "absolute",
              marginTop: "5px", // Adjust this value to your preference
            }}
          >
            {isErrorEmail && "Email is required."}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={isErrorPassword}>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none" fontSize="1.2em">
              <LockIcon color="gray.300" />
            </InputLeftElement>

            <Input
              type={show ? "text" : "password"}
              placeholder="password"
              onChange={handleInputChangePassword}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.80rem"
                size="sm"
                onClick={handleShowPassword}
                color={"#FF385C"}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage
            style={{
              marginTop: "5px", // Adjust this value to your preference
            }}
          >
            {isErrorPassword && "Password is required."}
          </FormErrorMessage>
        </FormControl>

        <button
          className="bg-primary-red p-2 w-full text-white rounded-lg mt-5 font-bold"
          disabled={
            (isErrorEmail && isErrorPassword) || isErrorEmail || isErrorPassword
          }
        >
          Log ind
        </button>
        <div className="text-center py-2 text-gray-500">
          Har du ikke nogen bruger endnu?{" "}
          <Link className="underline text-black" to={"/register"}>
            Register dig her!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
