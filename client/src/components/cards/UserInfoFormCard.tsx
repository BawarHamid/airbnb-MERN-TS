import { FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Select from "react-select";

type UserInfoCardProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  province?: string;
  zipCode?: string;
  country: string;
};

const UserInfoFormCard: React.FC<UserInfoCardProps> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  city,
  province,
  zipCode,
  country,
}) => {
  const [editedFirstName, setEditedFirstName] = useState<string>(firstName);
  const [editedLastName, setEditedLastName] = useState<string>(lastName);
  const [editedEmail, setEditedEmail] = useState<string>(email);
  const [editedPhoneNumber, setEditedPhoneNumber] =
    useState<string>(phoneNumber);
  const [editedAddress, setEditedAddress] = useState<string>(address);
  const [editedCity, setEditedCity] = useState<string>(city);
  const [editedProvince, setEditedProvince] = useState<string | undefined>(
    province
  );
  const [editedZipCode, setEditedZipCode] = useState<string | undefined>(
    zipCode
  );
  const [editedCountry, setEditedCountry] = useState<string>(country);
  const [countriesData, setCountriesData] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCountriesData(data);
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
  }, []);
  console.log(editedCountry);
  return (
    <div className="outline-none py-8 px-8 my-2 focus:border focus:border-blue-600 focus:bg-slate-50 rounded-lg shadow-lg shadow-[#E4E3E9] max-w-2xl">
      <div className="flex flex-col h-full justify-start w-full px-10 mx-4">
        <h1 className="text-xl font-bold text-black text-start">
          Administrer dine konto oplysninger her
        </h1>
        <div className="mt-4">
          <div className="flex">
            <FormControl isRequired>
              <FormLabel className="text-primary-red" fontSize={"small"}>
                Fornavn:
              </FormLabel>
              <input
                type="text"
                value={editedFirstName}
                onChange={(e) => setEditedFirstName(e.target.value)}
                className="outline-none border border-primary-blue rounded-lg py-2 px-2 font-bold"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel className="text-primary-red" fontSize={"small"}>
                Efternavn:
              </FormLabel>
              <input
                type="text"
                value={editedLastName}
                onChange={(e) => setEditedLastName(e.target.value)}
                className="outline-none border border-primary-blue rounded-lg py-2 px-2 font-bold"
              />
            </FormControl>
          </div>

          <div className="flex mt-4">
            <FormControl isRequired>
              <FormLabel className="text-primary-red" fontSize={"small"}>
                Email:
              </FormLabel>
              <input
                type="text"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                className="outline-none border border-primary-blue rounded-lg py-2 px-2 font-bold"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel className="text-primary-red" fontSize={"small"}>
                Mobilnummer:
              </FormLabel>
              <input
                type="text"
                value={editedPhoneNumber}
                onChange={(e) => setEditedPhoneNumber(e.target.value)}
                className="outline-none border border-primary-blue rounded-lg py-2 px-2 font-bold"
              />
            </FormControl>
          </div>

          <div className="mt-4">
            <FormControl isRequired>
              <FormLabel className="text-primary-red" fontSize={"small"}>
                Adresse:
              </FormLabel>
              <input
                type="text"
                value={editedAddress}
                onChange={(e) => setEditedAddress(e.target.value)}
                className="outline-none border border-primary-blue rounded-lg py-2 font-bold bg-[#FBFBFB] px-2 w-[495px]"
              />
            </FormControl>
          </div>

          <div className="flex mt-4">
            <FormControl>
              <FormLabel className="text-primary-red" fontSize={"small"}>
                By:
              </FormLabel>
              <input
                type="text"
                value={editedCity}
                onChange={(e) => setEditedCity(e.target.value)}
                className="outline-none border border-primary-blue rounded-lg py-2 px-2 font-bold"
              />
            </FormControl>

            <FormControl>
              <FormLabel className="text-primary-red" fontSize={"small"}>
                Region:
              </FormLabel>
              <input
                type="text"
                value={editedProvince}
                onChange={(e) => setEditedProvince(e.target.value)}
                className="outline-none border border-primary-blue rounded-lg py-2 px-2 font-bold"
              />
            </FormControl>
          </div>
          <div className="flex mt-4">
            <FormControl>
              <FormLabel className="text-primary-red" fontSize={"small"}>
                Postnummer:
              </FormLabel>
              <input
                type="text"
                value={editedZipCode}
                onChange={(e) => setEditedZipCode(e.target.value)}
                className="outline-none border border-primary-blue rounded-lg py-2 px-2 font-bold"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel className="text-primary-red" fontSize={"small"}>
                Land:
              </FormLabel>
              <select
                className="outline-none border border-primary-blue rounded-lg py-2 px-2 w-[230px] font-bold bg-[#FBFBFB]"
                onChange={(e) => setEditedCountry(e.target.value)}
                value={editedCountry}
                style={{ height: "2.66rem" }}
              >
                <option value="none" disabled selected className="font-bold">
                  Vælg et land
                </option>
                {countriesData.map((country, index) => (
                  <option key={index} value={country.name.common}>
                    <img
                      src={country.flags.svg || country.flags.png}
                      alt={`${country.name.common} flag`}
                      style={{ width: "20px", marginRight: "5px" }}
                    />
                    {country.name.common}
                  </option>
                ))}
              </select>
              {/* <Select
                className="outline-none border border-primary-blue rounded-lg py-2 px-2 font-bold"
                focusBorderColor="#455CC6"
                borderColor="#455CC6"
                borderWidth="1px"
                placeholder="Vælg land"
                alignItems="center"
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Select> */}
            </FormControl>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              value={editedAddress}
              // onChange={(e) => setEditedAddress(e.target.value)}
              className="rounded-lg py-2 font-bold px-2 w-[495px] bg-primary-blue text-white select-none border hover:bg-primary-blue hover:bg-opacity-70 active:bg-blue-700 active:bg-opacity-80"
            >
              Opdater Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoFormCard;
