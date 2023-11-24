import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignInPage: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [redirect, setRedirect] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const isErrorEmail = email === "";
  const isErrorPassword = password === "";

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await axios.post("/login", { email, password });
      toast({
        title: "Logger ind....",
        status: "info",
        duration: 500,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        position: "top",
        title: "Log ind fejl!",
        description: "Der opstod en fejl under log ind, prøv igen!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  //unødvendig måde at redirect
  // if (redirect) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="mt-4 grow">
      <h1 className="text-3xl text-center">Velkommen til BeHome's!</h1>
      <h3 className="text-lg text-center text-gray-400 mt-2 italic font-bold">
        Log ind her!
      </h3>
      <form className="max-w-md mx-auto mt-10" onSubmit={handleLogin}>
        <FormControl isInvalid={isErrorEmail} mb="8" isRequired>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="email"
              placeholder="behome@email.com"
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
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
          type="submit"
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
