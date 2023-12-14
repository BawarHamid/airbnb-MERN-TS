// import { EmailIcon, LockIcon } from "@chakra-ui/icons";
// import {
//   Button,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   InputRightElement,
//   Select,
//   useToast,
// } from "@chakra-ui/react";
// import React, { useContext, useState } from "react";
// import axios from "axios";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";
// import { useCountryDataService } from "../../services/countryDataService";

// const SignUpPage: React.FC = () => {
//   const { user } = useContext(UserContext);
//   const [show, setShow] = React.useState(false);
//   const handleShowPassword = () => setShow(!show);
//   const [firstname, setFirstName] = useState<string>("");
//   const [lastname, setLastName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [phoneNumber, setPhoneNumber] = useState<string>("");
//   const [address, setAddress] = useState<string>("");
//   const [city, setCity] = useState<string>("");
//   const [province, setProvince] = useState<string | undefined>("");
//   const [zipCode, setZipCode] = useState<string | undefined>("");
//   const [country, setCountry] = useState<string>("");
//   const countriesData = useCountryDataService();

//   const toast = useToast();
//   const navigate = useNavigate();

//   if (user) {
//     return <Navigate to="/" />;
//   }

//   // const handleEmailChange = (e) => setEmail(e.target.value);
//   // const handlePasswordChange = (e) => setPassword(e.target.value);
//   // const handleFirstNameChange = (e) => setFirstName(e.target.value);
//   // const handleLastNameChange = (e) => setLastName(e.target.value);

//   const isErrorFirstName = firstname === "";
//   const isErrorLastName = lastname === "";
//   const isErrorEmail = email === "";
//   const isErrorPassword = password === "";

//   const handleRegistration = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();

//     try {
//       await axios.post("/register", { firstname, lastname, email, password });
//       toast({
//         position: "top",
//         title: "Registreringen Gennemført!",
//         description: "Registrering godkendt. Du logger nu ind!",
//         status: "success",
//         duration: 500,
//         isClosable: true,
//       });
//       navigate("/");
//     } catch (error) {
//       toast({
//         position: "top",
//         title: "Registrerings fejl!",
//         description: "Der opstod en fejl under registrering, prøv igen!",
//         status: "error",
//         duration: 1500,
//         isClosable: true,
//       });
//     }
//   };

//   const svgStyleNavBarLogo = {
//     fill: "#FF385C",
//   };

//   return (
//     <div className="flex flex-col items-center justify-center mt-8">
//       <div className="flex items-center gap-2 mb-5">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 640 512"
//           style={svgStyleNavBarLogo}
//           className="h-16 w-16"
//         >
//           <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
//         </svg>
//         <span className="font-bold text-2xl">BeHome's</span>
//       </div>
//       <h1 className="text-3xl">Velkommen til BeHome's!</h1>
//       <h3 className="text-xl mt-2 italic font-bold text-gray-600">
//         Registrer dig
//       </h3>
//       <form className="max-w-md mx-auto mt-6" onSubmit={handleRegistration}>
//         <div className="grid grid-cols-2 gap-4">
//           <FormControl isRequired>
//             <FormLabel className="text-primary-red">Fornavn</FormLabel>
//             <Input
//               type="text"
//               value={firstname}
//               onChange={(e) => setFirstName(e.target.value)}
//               variant="outline"
//               borderColor="primary-blue"
//               borderRadius="lg"
//               py="2"
//               px="4"
//               fontWeight="bold"
//             />
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel className="text-primary-red">Efternavn</FormLabel>
//             <Input
//               type="text"
//               value={lastname}
//               onChange={(e) => setLastName(e.target.value)}
//               variant="outline"
//               borderColor="primary-blue"
//               borderRadius="lg"
//               py="2"
//               px="4"
//               fontWeight="bold"
//             />
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel className="text-primary-red">Email</FormLabel>
//             <InputGroup>
//               <InputLeftElement pointerEvents="none" fontSize="1.2em">
//                 <EmailIcon color="gray.300" />
//               </InputLeftElement>
//               <Input
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 variant="outline"
//                 borderColor="primary-blue"
//                 borderRadius="lg"
//                 py="2"
//                 px="4"
//                 fontWeight="bold"
//               />
//             </InputGroup>
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel className="text-primary-red">Password</FormLabel>
//             <InputGroup>
//               <InputLeftElement pointerEvents="none" fontSize="1.2em">
//                 <LockIcon color="gray.300" />
//               </InputLeftElement>
//               <Input
//                 type={show ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 variant="outline"
//                 borderColor="primary-blue"
//                 borderRadius="lg"
//                 py="2"
//                 px="4"
//                 fontWeight="bold"
//               />
//               <InputRightElement width="4.5rem">
//                 <Button
//                   h="1.80rem"
//                   size="sm"
//                   onClick={handleShowPassword}
//                   color={"#FF385C"}
//                 >
//                   {show ? "Hide" : "Show"}
//                 </Button>
//               </InputRightElement>
//             </InputGroup>
//             <FormErrorMessage>
//               {isErrorPassword && "Password is required."}
//             </FormErrorMessage>
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel className="text-primary-red">Mobilnummer</FormLabel>
//             <Input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               variant="outline"
//               borderColor="primary-blue"
//               borderRadius="lg"
//               py="2"
//               px="4"
//               fontWeight="bold"
//             />
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel className="text-primary-red">Mobilnummer</FormLabel>
//             <Input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               variant="outline"
//               borderColor="primary-blue"
//               borderRadius="lg"
//               py="2"
//               px="4"
//               fontWeight="bold"
//             />
//           </FormControl>

//           <FormControl isRequired>
//             <FormLabel className="text-primary-red">Land</FormLabel>
//             <Select
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               variant="outline"
//               borderColor="primary-blue"
//               borderRadius="lg"
//               fontWeight="bold"
//             >
//               <option value="none" disabled className="font-bold">
//                 Vælg et land
//               </option>
//               {countriesData.map((country, index) => (
//                 <option key={index} value={country.name.common}>
//                   {country.name.common}
//                 </option>
//               ))}
//             </Select>
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel className="text-primary-red">Mobilnummer</FormLabel>
//             <Input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               variant="outline"
//               borderColor="primary-blue"
//               borderRadius="lg"
//               py="2"
//               px="4"
//               fontWeight="bold"
//             />
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel className="text-primary-red">Adresse</FormLabel>
//             <Input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               variant="outline"
//               borderColor="primary-blue"
//               borderRadius="lg"
//               py="2"
//               px="4"
//               fontWeight="bold"
//               bg="#FBFBFB"
//               w="495px"
//             />
//           </FormControl>
//         </div>
//         {/* Submit button */}
//         <Button
//           className="bg-primary-red py-2 text-white rounded-lg mt-5 font-bold w-full"
//           disabled={
//             (isErrorFirstName &&
//               isErrorLastName &&
//               isErrorEmail &&
//               isErrorPassword) ||
//             isErrorFirstName ||
//             isErrorLastName ||
//             isErrorEmail ||
//             isErrorPassword
//           }
//           backgroundColor="#FF385C"
//           type="submit"
//           borderColor="primary-blue"
//           borderRadius="lg"
//           rounded="8px"
//           fontWeight="bold"
//         >
//           Opret
//         </Button>
//         <div className="text-center py-2 text-gray-500">
//           Er du allerede registeret?{" "}
//           <Link className="underline text-black" to={"/login"}>
//             Log ind her!
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;
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
import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const SignUpPage: React.FC = () => {
  const { setUser } = useContext(UserContext);
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
      const { data } = await axios.post("/register", {
        firstname,
        lastname,
        email,
        password,
      });
      toast({
        position: "top",
        title: "Registreringen Gennemført!",
        description: "Registrering godkendt. Du logger nu ind!",
        status: "success",
        duration: 500,
        isClosable: true,
      });
      setUser(data);
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
