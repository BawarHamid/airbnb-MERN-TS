import { FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { useCountryDataService } from "../../services/countryDataService";

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
  const countriesData = useCountryDataService();

  return (
    <div className="outline-none py-8 px-8 my-3 focus:border focus:border-blue-600 focus:bg-slate-50 rounded-lg shadow-lg shadow-[#E4E3E9] max-w-2xl">
      <div className="flex flex-col h-full justify-start w-full px-10 mx-4">
        <h1 className="text-xl  text-black text-start">
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
                className="outline-none border border-primary-blue rounded-lg py-2 px-2"
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
                className="outline-none border border-primary-blue rounded-lg py-2 px-2"
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
                className="outline-none border border-primary-blue rounded-lg py-2 px-2"
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
                className="outline-none border border-primary-blue rounded-lg py-2 px-2"
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
                className="outline-none border border-primary-blue rounded-lg py-2  bg-[#FBFBFB] px-2 w-[495px]"
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
                className="outline-none border border-primary-blue rounded-lg py-2 px-2"
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
                className="outline-none border border-primary-blue rounded-lg py-2 px-2"
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
                className="outline-none border border-primary-blue rounded-lg py-2 px-2"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel className="text-primary-red" fontSize={"small"}>
                Land:
              </FormLabel>
              <select
                className="outline-none border border-primary-blue rounded-lg py-2 px-2 w-[230px] bg-[#FBFBFB]"
                onChange={(e) => setEditedCountry(e.target.value)}
                value={editedCountry}
                style={{ height: "2.63rem" }}
              >
                <option value="none" disabled className="">
                  Vælg et land
                </option>
                {countriesData.map((country, index) => (
                  <option key={index} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </FormControl>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="rounded-lg py-2  px-2 w-[495px] bg-primary-blue text-white select-none border hover:bg-primary-blue hover:bg-opacity-70 active:bg-blue-700 active:bg-opacity-80"
            >
              Opdater konto oplysninger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoFormCard;
