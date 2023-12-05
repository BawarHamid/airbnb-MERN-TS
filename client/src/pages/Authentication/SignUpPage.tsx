import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => setShow(!show);
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const isErrorFirstName = firstname === "";
  const isErrorLastName = lastname === "";
  const isErrorEmail = email === "";
  const isErrorPassword = password === "";

  const handleRegistration = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await axios.post("/register", { firstname, lastname, email, password });
      toast({
        position: "top",
        title: "Registreringen Gennemført!",
        description: "Registrering godkendt. Du logger nu ind!",
        status: "success",
        duration: 500,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        position: "top",
        title: "Registrerings fejl!",
        description: "Der opstod en fejl under registrering, prøv igen!",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  const svgStyleNavBarLogo = {
    fill: "#FF385C", // Red fill color for the svg
  };

  return (
    <div className="mt-2 grow">
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
      <h1 className="text-3xl text-center">Velkommen til BeHome's!</h1>
      <h3 className="text-xl text-center mt-2 italic font-bold text-gray-600">
        Registrer dig
      </h3>
      <form className="max-w-md mx-auto mt-5" onSubmit={handleRegistration}>
        {/* First Name form */}
        <FormControl isInvalid={isErrorFirstName} mb="8" isRequired>
          <FormLabel>First name:</FormLabel>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <FontAwesomeIcon icon={faUser} color="#CBD5E0" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="first name"
              onChange={handleFirstNameChange}
              value={firstname}
            />
          </InputGroup>
          <FormErrorMessage
            style={{
              position: "absolute",
              marginTop: "5px", // Adjust this value to your preference
            }}
          >
            {isErrorFirstName && "First Name is required."}
          </FormErrorMessage>
        </FormControl>

        {/* Last Name form */}
        <FormControl isInvalid={isErrorLastName} mb="8" isRequired>
          <FormLabel>Last Name:</FormLabel>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <FontAwesomeIcon icon={faUser} color="#CBD5E0" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="last name"
              onChange={handleLastNameChange}
              value={lastname}
            />
          </InputGroup>
          <FormErrorMessage
            style={{
              position: "absolute",
              marginTop: "5px", // Adjust this value to your preference
            }}
          >
            {isErrorLastName && "Last Name is required."}
          </FormErrorMessage>
        </FormControl>
        {/* Email form */}
        <FormControl isInvalid={isErrorEmail} mb="8" isRequired>
          <FormLabel>E-mail:</FormLabel>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="email"
              placeholder="behome@email.com"
              onChange={handleEmailChange}
              value={email}
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
        {/* Password form */}
        <FormControl isInvalid={isErrorPassword} isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none" fontSize="1.2em">
              <LockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type={show ? "text" : "password"}
              placeholder="password"
              onChange={handlePasswordChange}
              value={password}
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
        {/* Submit button */}
        <button
          className="bg-primary-red p-2 w-full text-white rounded-lg mt-5 font-bold"
          disabled={
            (isErrorFirstName &&
              isErrorLastName &&
              isErrorEmail &&
              isErrorPassword) ||
            isErrorFirstName ||
            isErrorLastName ||
            isErrorEmail ||
            isErrorPassword
          }
          type="submit"
        >
          Opret
        </button>
        <div className="text-center py-2 text-gray-500">
          Er du allerede registeret?{" "}
          <Link className="underline text-black" to={"/login"}>
            Log ind her!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
