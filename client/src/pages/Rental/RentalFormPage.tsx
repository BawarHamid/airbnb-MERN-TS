import { FormControl, useToast } from "@chakra-ui/react";

import CountriesListbox from "../../components/dialogs/listbox/CountriesListbox";
import { useEffect, useState } from "react";
import RentalInfoOption from "../../components/rental/RentalInfoOption";
import PlaceTypeListbox from "../../components/dialogs/listbox/PlaceTypeListbox";
import ImgUploader from "../../components/rental/imgs/ImgUploader";
import PlaceFeatures from "../../components/rental/PlaceFeatures";
import CheckInOutToggle from "../../components/rental/CheckInNOut/SetHouseRulesToggle";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const RentalFormPage: React.FC = () => {
  const { id } = useParams();
  const [country, setCountry] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [addressInfo, setAddressInfo] = useState<string>("");
  const [zipCode, setZipCode] = useState<number | undefined>();
  const [city, setCity] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [beds, setBeds] = useState<number>(1);
  const [maxGuests, setMaxGuests] = useState<number>(1);
  const [rooms, setRooms] = useState<number>(0);
  const [price, setPrice] = useState<number>(50);
  const [imgs, setImgs] = useState<string[]>([]);
  const [placeType, setPlaceType] = useState<string>("");
  const [features, setFeatures] = useState<string[]>([]);
  const [checkInStart, setCheckInStart] = useState<string>("10:00");
  const [checkInEnd, setCheckInEnd] = useState<string>("23:59");
  const [checkOut, setCheckOut] = useState<string>("15:00");
  // const [exstrainfo, setExstrainfo] = useState<string>("");
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get("/rentals/" + id).then((response) => {
      const { data } = response;
      setTitle(data.imgs);
      setImgs(data.price);
      setAddress(data.address);
      setAddressInfo(data.addressInfo);
      setCity(data.city);
      setZipCode(data.zipCode);
      setCountry(data.country);
      setDescription(data.description);
      setFeatures(data.features);
      setPlaceType(data.placeType);
      setCheckInStart(data.checkInStart);
      setCheckInEnd(data.checkInEnd);
      setCheckOut(data.checkOut);
      setBeds(data.beds);
      setMaxGuests(data.maxGuests);
      setRooms(data.rooms);
      setPrice(data.price);
    });
  }, [id]);

  const handleCreateRental = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const rentalData = {
        address,
        addressInfo,
        zipCode,
        country,
        city,
        title,
        description,
        beds,
        maxGuests,
        rooms,
        price,
        imgs,
        placeType,
        features,
        checkInStart,
        checkInEnd,
        checkOut,
      };

      if (id) {
        //updating if id is true
        await axios.put("/rentals", rentalData);
        toast({
          title: "Dit opslag er nu opdateret",
          status: "info",
          duration: 500,
          isClosable: true,
          position: "top",
        });
      } else {
        //creating if id is false
        await axios.post("/rentals", rentalData);
        toast({
          title: "Dit opslag er nu oprettet",
          status: "success",
          duration: 500,
          isClosable: true,
          position: "top",
        });
      }
      navigate("/profile/my-rentals");
    } catch (error) {
      toast({
        position: "top",
        title: "Error",
        description: "Vi kunne ikke håndtere dit opslag, prøv igen",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  return (
    // <div className="flex justify-center items-center px-60">
    <div className="sm:px-2 md:px-4 flex justify-center">
      {/* <div className="border rounded-lg mt-[-10px] p-4 w-full"> */}
      <div className="border-gray-300 border rounded-lg p-4 w-full max-w-7xl px-44">
        {/* <div className=" border-gray-300 border rounded-lg p-4 w-full max-w-7xl"> */}
        {/* Hoved titel */}
        <div>
          <h1 className="border-b border-gray-300 text-start sm:text-center font-bold text-xl pb-4">
            {/* <h1 className="border-b-2 border-gray-300 text-start sm:text-center font-bold text-lg pb-2"> */}
            {id ? "Redigering påbegyndt" : "Oprettelse af nyt opslag"}
          </h1>
        </div>
        {/* Form start */}
        {/* <form className="mt-16 px-60"> */}
        <form
          className="mt-16 px-2 sm:px-2 md:px-10"
          onSubmit={handleCreateRental}
        >
          {/* Adresse,Land,postnr,by osv - adresseoplysninger */}
          <div>
            <div className="mb-5">
              <h2 className="font-bold text-gray-800 text-lg text-start whitespace-nowrap overflow-hidden">
                Indtast dine adresseoplysninger
              </h2>
              <p className="italic text-base text-gray-500 mt-2 text-start ">
                Din fulde adresse deles først med de kommende gæster, når der er
                foretaget en reservation.
              </p>
            </div>
            <div className="my-8">
              <FormControl isRequired>
                {/* <FormLabel
                className="text-primary-red"
                fontSize={"small"}
                fontWeight={"bold"}
              >
                Land:
              </FormLabel> */}
                <div className="">
                  <CountriesListbox
                    value={country}
                    changeCallback={setCountry}
                  />
                </div>
              </FormControl>
            </div>
            <FormControl isRequired className="mb-8">
              <div className="border-2 border-gray-300 rounded-lg w-full shadow-sm divide-y-2 divide-gray-300">
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  type="text"
                  placeholder="Adresse"
                  className="select-none w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 rounded-lg border-transparent focus:border-black focus:rounded-lg"
                />
                <input
                  onChange={(e) => setAddressInfo(e.target.value)}
                  value={addressInfo}
                  type="text"
                  placeholder="Lejlighed, suite, bygning (hvis relevant)"
                  className="select-none w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 border-transparent focus:border-black focus:rounded-lg"
                />
                <input
                  onChange={(e) => setZipCode(e.target.value)}
                  value={zipCode}
                  type="number"
                  placeholder="Postnummer"
                  className="select-none w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 border-transparent focus:border-black focus:rounded-lg"
                />
                <input
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  type="text"
                  placeholder="By"
                  className="select-none w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 border-y rounded-b-lg border-transparent focus:border-black focus:rounded-lg"
                />
              </div>
            </FormControl>
          </div>
          {/* Bolig-type,titel og beskrivelse, gæste,vær,sengeinfo,  */}
          <div>
            <div className="mb-5">
              <h2 className="font-bold text-gray-800 text-lg text-start whitespace-nowrap overflow-hidden">
                Angiv hvilken type bolig du har til rådighed
              </h2>
              <p className="italic text-base text-gray-500 mt-2 text-start">
                Hvilken af disse typer boliger beskriver mest din bolig?
              </p>
            </div>
            <div className="my-6">
              <FormControl isRequired>
                {/* <FormLabel
                className="text-primary-red"
                fontSize={"small"}
                fontWeight={"bold"}
              >
                Land:
              </FormLabel> */}
                <div className="">
                  <PlaceTypeListbox
                    value={placeType}
                    changeCallback={setPlaceType}
                  />
                </div>
              </FormControl>
            </div>
            <div className="mb-5">
              <h2 className="font-bold text-gray-800 text-lg text-start whitespace-nowrap overflow-hidden">
                Lad os starte med det grundlæggende
              </h2>
              <p className="italic text-base text-gray-500 mt-1 text-start">
                Hvor mange personer kan bo her?
              </p>
            </div>
            <div>
              <FormControl isRequired>
                <RentalInfoOption
                  value={maxGuests}
                  changeCallback={setMaxGuests}
                  infoText="Maks antal gæster"
                />
                <RentalInfoOption
                  value={rooms}
                  changeCallback={setRooms}
                  infoText="Værelser i huset"
                />
                <RentalInfoOption
                  value={beds}
                  changeCallback={setBeds}
                  infoText="Senge til rådighed"
                />
              </FormControl>
            </div>
            <div className="mt-6">
              <h2 className="font-bold text-gray-800 text-lg text-start whitespace-nowrap overflow-hidden">
                Lad os give din/dit bolig en titel
              </h2>
              <p className="italic text-base text-gray-500 mt-1 text-start">
                Korte titler fungerer bedst. Bare rolig, du kan altid ændre det
                senere.
              </p>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="En titel, som vil fange øjne...."
                className="outline-none select-none mt-5 w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 rounded-lg border-gray-300 border-2 focus:border-black focus:rounded-lg"
              />
            </div>

            <div className="mt-6">
              <h2 className="font-bold text-gray-800 text-lg text-start whitespace-nowrap overflow-hidden">
                Lav din beskrivelse
              </h2>
              <p className="italic text-base text-gray-500 mt-1 text-start">
                Fortæl, hvad der gør din bolig til noget særligt.
              </p>
              <textarea
                placeholder="Nyd en stilfuld oplevelse i denne centralt beliggende bolig...."
                value={description}
                className="outline-none mt-5 select-none w-full pt-3 pb-16 pl-2 pr-10 text-left placeholder-gray-400 border-gray-300 border-2 rounded-lg focus:border-black focus:rounded-lg"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          {/* Upload billeder sektion */}
          <div>
            <div className="mt-6">
              <h2 className="font-bold text-gray-800 text-lg text-start whitespace-nowrap overflow-hidden">
                Tilføj nogle billeder af din bolig
              </h2>
              <p className="italic text-base text-gray-500 mt-1 text-start">
                Du skal bruge fem billeder for at komme i gang. Du kan tilføje
                flere eller foretage ændringer senere.
              </p>
            </div>
            <FormControl isRequired>
              <ImgUploader addedImgs={imgs} changeCallback={setImgs} />
            </FormControl>
          </div>
          {/* Valg af boligens faciliteter */}
          <div>
            <div className="mt-6">
              <h2 className="font-bold text-gray-800 text-lg text-start whitespace-nowrap overflow-hidden">
                Fortæl gæsterne, hvad din bolig har at byde på
              </h2>
              <p className="italic text-base text-gray-500 mt-1 text-start">
                Du kan tilføje flere faciliteter, når du har offentliggjort dit
                opslag.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
              <PlaceFeatures
                selectedFeatures={features}
                setSelectedFeatures={setFeatures}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-8 h-11"
                  >
                    <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                  </svg>
                }
                name="Trådløst internet"
              />
              <PlaceFeatures
                selectedFeatures={features}
                setSelectedFeatures={setFeatures}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-11"
                    viewBox="0 0 640 512"
                  >
                    <path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                  </svg>
                }
                name="TV"
              />
              <PlaceFeatures
                selectedFeatures={features}
                setSelectedFeatures={setFeatures}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-8 h-11"
                  >
                    <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16H496c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16H284.4zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-8c0-13.3 10.7-24 24-24zM288 464V352H512V464c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zM48 320h80 16 32c26.5 0 48 21.5 48 48s-21.5 48-48 48H160c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V336c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160v32h16zM24 464H200c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                  </svg>
                }
                name="Køkken"
              />
              <PlaceFeatures
                selectedFeatures={features}
                setSelectedFeatures={setFeatures}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-11"
                    viewBox="0 0 512 512"
                  >
                    <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                  </svg>
                }
                name="Gratis bilparkering"
              />
              <PlaceFeatures
                selectedFeatures={features}
                setSelectedFeatures={setFeatures}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-11"
                    viewBox="0 0 512 512"
                  >
                    <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                  </svg>
                }
                name="Kæledyr tilladt"
              />
              <PlaceFeatures
                selectedFeatures={features}
                setSelectedFeatures={setFeatures}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-11"
                    viewBox="0 0 640 512"
                  >
                    <path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                }
                name="Arbejdsbord"
              />
              <PlaceFeatures
                selectedFeatures={features}
                setSelectedFeatures={setFeatures}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-11"
                    viewBox="0 0 576 512"
                  >
                    <path d="M128 127.7C128 74.9 170.9 32 223.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7V224H384V127.7C384 74.9 426.9 32 479.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7V361c-1.6 1-3.3 2-4.8 3.1c-18 12.4-40.1 20.3-59.2 20.3h0V288H192v96.5c-19 0-41.2-7.9-59.1-20.3c-1.6-1.1-3.2-2.2-4.9-3.1V127.7zM306.5 389.9C329 405.4 356.5 416 384 416c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 469.7 417 480 384 480c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 405.2 165.1 416 192 416c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" />
                  </svg>
                }
                name="Swimmingpool"
              />
              <PlaceFeatures
                selectedFeatures={features}
                setSelectedFeatures={setFeatures}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-11"
                    viewBox="0 0 640 512"
                  >
                    <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
                  </svg>
                }
                name="Træningsudstyr"
              />
              <PlaceFeatures
                selectedFeatures={features}
                setSelectedFeatures={setFeatures}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-11"
                    viewBox="0 0 640 512"
                  >
                    <path d="M448 32V43c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2v11c0 17.7-14.3 32-32 32s-32-14.3-32-32V245c0-12.7-5.1-24.9-14.1-33.9l-21-21C405.9 151.1 384 98.1 384 43V32c0-17.7 14.3-32 32-32s32 14.3 32 32zM576 256V245c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2V32c0-17.7 14.3-32 32-32s32 14.3 32 32V43c0 12.7 5.1 24.9 14.1 33.9l21 21c39 39 60.9 91.9 60.9 147.1v11c0 17.7-14.3 32-32 32s-32-14.3-32-32zM0 416c0-35.3 28.7-64 64-64H416c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64V416zm224 0v32H384V416H224zm288-64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384c0-17.7 14.3-32 32-32z" />
                  </svg>
                }
                name="Rygning indendørs"
              />
              <PlaceFeatures
                selectedFeatures={features}
                setSelectedFeatures={setFeatures}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-11"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                }
                name="Supermarked i nærheden"
              />
            </div>
          </div>
          {/* Ordensregler - Ting gæsterne skal vide */}
          <div className="border-t mt-10">
            <div className="mt-6">
              <h2 className="font-bold text-gray-800 text-lg text-start whitespace-nowrap overflow-hidden">
                Ordensregler - Ting gæsterne skal vide
              </h2>
              <p className="italic text-base text-gray-500 mt-1 text-start">
                Det forventes at gæsterne følger dine regler - og de kan blive
                fjernet fra BeHome's, hvis de ikke gør det.
              </p>
            </div>
            <div className="grid mt-6">
              <CheckInOutToggle
                valueStart={checkInStart}
                valueEnd={checkInEnd}
                valueOut={checkOut}
                valuePrice={price}
                valueMaxGuests={maxGuests}
                changeCallbackStart={setCheckInStart}
                changeCallbackEnd={setCheckInEnd}
                changeCallbackOut={setCheckOut}
                changeCallbackPrice={setPrice}
                changeCallbackMaxGuests={setMaxGuests}
                labelStart="Starttidspunkt for indtjekning"
                labelEnd="Sluttidspunkt for indtjekning"
                labelOut="Udtjekningstidspunkt"
                labelPrice="Angiv din pris"
                labelMaxGuests="Dobbelttjekke antal gæster her"
              />
            </div>
          </div>
          {/* Submit button */}
          <div>
            <button
              disabled={false}
              type="submit"
              className="mt-6 bg-primary-medium-black hover:bg-black text-white font-semibold rounded-lg py-3 w-full active:scale-95 transition-transform active:rounded-full"
            >
              Tilføj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RentalFormPage;
