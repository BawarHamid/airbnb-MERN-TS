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
import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const SignInPage: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => setShow(!show);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser, user } = useContext(UserContext);

  // const [redirect, setRedirect] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/" />;
  }

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const isErrorEmail = email === "";
  const isErrorPassword = password === "";

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/login", { email, password });
      toast({
        title: "Logger ind....",
        status: "info",
        duration: 500,
        isClosable: true,
      });
      setUser(data);
      navigate("/");
    } catch (error) {
      toast({
        position: "top",
        title: "Login Error!",
        description: "Ugyldig email eller adgangskode!",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  //unødvendig måde at redirect
  // if (redirect) {
  //   return <Navigate to={"/"} />;
  // }

  const svgStyleNavBarLogo = {
    fill: "#FF385C",
  };

  return (
    <div className="mt-8 grow">
      <div className="flex justify-center items-center gap-2 mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          style={svgStyleNavBarLogo}
          className="h-16 w-16"
        >
          <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
        </svg>
        <span className="font-bold text-2xl">BeHome's</span>
      </div>
      <h1 className="text-3xl text-center">Velkommen tilbage</h1>
      <h3 className="text-xl text-center mt-2 italic font-bold text-gray-600">
        Log ind
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
