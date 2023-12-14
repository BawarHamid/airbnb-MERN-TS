import { FormControl, FormLabel, Input } from "@chakra-ui/react";

import CountriesListbox from "../../components/dialogs/CountriesListbox";
import { useState } from "react";

const RentalFormPage: React.FC = () => {
  const [country, setCountry] = useState<string>("");
  // const [country, setCountry] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [maxGuests, setMaxGuests] = useState<string>("1");
  const [rooms, setRooms] = useState<string>("1");
  const [price, setPrice] = useState<string>("50");
  const [imgs, setImgs] = useState<string[]>([]);
  const [placeType, setPlaceType] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  // const [exstrainfo, setExstrainfo] = useState<string>("");

  return (
    // <div className="border rounded-lg max-w-3xl m-4 p-4 ml-[430px]">
    //   <div className="">
    //     <h1 className="border-b-2 border-primary-blue border-opacity-60 text-start font-bold text-xl pb-2">
    //       {/* {id ? Redigering påbegyndt : Oprettelse af nyt opslag} */}
    //       Opret et nyt opslag:Rediger et færdiggjort opslag
    //     </h1>
    //   </div>

    //   <form className="mt-20">
    //     <FormControl isRequired>
    //       <FormLabel className="text-primary-red" fontSize={"small"}>
    //         Land:
    //       </FormLabel>
    //       <div className="">
    //         <CountriesListbox value={country} changeCallback={setCountry} />
    //       </div>
    //     </FormControl>
    //   </form>
    // </div>

    <div className="flex justify-center items-center px-60">
      <div className="border rounded-lg mt-[-10px] p-4 w-full">
        <div className="">
          <h1 className="border-b-2 border-primary-blue border-opacity-60 text-start font-bold text-xl pb-2">
            {/* {id ? Redigering påbegyndt : Oprettelse af nyt opslag} */}
            Opret et nyt opslag:Rediger et færdiggjort opslag
          </h1>
        </div>

        <form className="mt-16 px-60">
          <div className="mb-5">
            <h2 className="font-bold text-graplaceholder-gray-400 text-2xl text-center">
              Indtast dine adresseoplysninger
            </h2>
            <p className="italic text-base text-gray-500 mt-1 text-center">
              Din fulde adresse deles først med de kommende gæster, når de har
              foretaget en reservation.
            </p>
          </div>
          <div className="mb-5">
            <FormControl isRequired>
              <FormLabel
                className="text-primary-red"
                fontSize={"small"}
                fontWeight={"bold"}
              >
                Land:
              </FormLabel>
              <div className="">
                <CountriesListbox value={country} changeCallback={setCountry} />
              </div>
            </FormControl>
          </div>

          <FormControl isRequired>
            {/* <FormLabel
              className="text-primary-red"
              fontSize={"small"}
              fontWeight={"bold"}
            >
              Adresse:
            </FormLabel> */}
            <div className="border border-gray-300 rounded-lg w-full shadow-sm divide-y divide-gray-300">
              <input
                type="text"
                placeholder="Adresse"
                className="select-none w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 rounded-lg border-transparent focus:border-black focus:rounded-lg"
              />
              <input
                type="text"
                placeholder="Lejlighed, suite, bygning (hvis relevant)"
                className="select-none w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 border-transparent focus:border-black focus:rounded-lg"
              />
              <input
                type="text"
                placeholder="Postnummer"
                className="select-none w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 border-transparent focus:border-black focus:rounded-lg"
              />
              <input
                type="text"
                placeholder="By"
                className="select-none w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 border-y rounded-b-lg border-transparent focus:border-black focus:rounded-lg"
              />
            </div>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default RentalFormPage;
