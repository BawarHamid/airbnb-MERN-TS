/* <Listbox value={country} onChange={setCountry}>
  <div className="relative mt-1">
    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
      <span className="block truncate font-bold">
        {country || "Vælg et land"}
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
      </span>
    </Listbox.Button>
    <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Listbox.Options className="absolute mt-1 max-h-[22.8rem] w-full overflow-auto rounded-md bg-[#FBFBFB] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
        {countriesData.map((country, index) => (
          <Listbox.Option
            key={index}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                active
                  ? "bg-primary-blue opacity-90 text-white"
                  : "text-gray-900"
              }`
            }
            value={country.name.common}
          >
            {({ active }) => (
              <>
                <span
                  className={`block truncate ${
                    active ? "font-medium" : "font-normal"
                  }`}
                >
                  {country.name.common}
                </span>
                {active ? (
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ) : null}
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Transition>
  </div>
</Listbox>; */

// import { Fragment, useState } from "react";
// import { useCountryDataService } from "../../services/countryDataService";
// import { Combobox, Listbox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// const countriesData = useCountryDataService();
// const [query, setQuery] = useState("");

// const filteredCountries =
//   query === ""
//     ? countriesData
//     : countriesData.filter((country) =>
//         country.name.common
//           .toLowerCase()
//           .replace(/\s+/g, "")
//           .includes(query.toLowerCase().replace(/\s+/g, ""))
//       );

// import { Listbox, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";
// import { useCountryDataService } from "../../services/countryDataService";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// type CountriesListbox = {
//   value: string;
//   changeCallback: React.Dispatch<React.SetStateAction<string>>;
// };

// const CountriesListbox: React.FC<CountriesListbox> = ({
//   value,
//   changeCallback,
// }) => {
//   const countriesData = useCountryDataService();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <Listbox value={value} onChange={changeCallback}>
//         <div className="relative mt-1">
//           <Listbox.Button
//             className={`relative w-full cursor-default rounded-lg focus:outline-none bg-white py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm ${
//               isOpen ? "border-gray-700 border-2" : "border-gray-200 border-2"
//             }`}
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span className="block truncate font-bold">
//               {value || "Vælg et land"}
//             </span>
//             <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//               <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
//             </span>
//           </Listbox.Button>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Listbox.Options className="absolute mt-1 max-h-[22.8rem] w-full overflow-auto rounded-md bg-[#FBFBFB] py-1 text-base shadow-lg focus:outline-none sm:text-sm">
//               {countriesData.map((country, index) => (
//                 <Listbox.Option
//                   onClick={() => setIsOpen(!isOpen)}
//                   key={index}
//                   className={({ active }) =>
//                     `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                       active
//                         ? "bg-primary-blue opacity-90 text-white"
//                         : "text-gray-900"
//                     }`
//                   }
//                   value={country.name.common}
//                 >
//                   {({ active }) => (
//                     <>
//                       <span
//                         className={`block truncate ${
//                           active ? "font-medium" : "font-normal"
//                         }`}
//                       >
//                         {country.name.common}
//                       </span>
//                       {active ? (
//                         <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
//                           <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                         </span>
//                       ) : null}
//                     </>
//                   )}
//                 </Listbox.Option>
//               ))}
//             </Listbox.Options>
//           </Transition>
//         </div>
//       </Listbox>
//     </>
//   );
// };

// export default CountriesListbox;

import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, useRef } from "react";
import { useCountryDataService } from "../../services/countryDataService";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type CountriesListbox = {
  value: string,
  changeCallback: React.Dispatch<React.SetStateAction<string>>,
};

const CountriesListbox = ({ value, changeCallback }) => {
  const countriesData = useCountryDataService();
  const [showBorder, setShowBorder] = useState(false);
  const listBoxRef = useRef(null);

  const handleSelect = (value) => {
    changeCallback(value);
    setShowBorder(false); // Hide the border after an option is selected
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listBoxRef.current && !listBoxRef.current.contains(event.target)) {
        setShowBorder(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Listbox value={value} onChange={handleSelect}>
        <div className="relative mt-1" ref={listBoxRef}>
          <Listbox.Button
            className={`relative w-full cursor-default rounded-lg focus:outline-none bg-white py-3 pl-3 pr-10 text-left shadow-sm sm:text-sm ${
              showBorder ? "border-gray-700 border-2" : "border-gray-200 border"
            }`}
            onClick={() => setShowBorder(true)} // Show the border on click
          >
            <span className="block truncate font-bold">
              {value || "Vælg et land"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className={`h-5 w-5 ${
                  showBorder ? "text-black" : "text-gray-400"
                }`}
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-[22.8rem] w-full overflow-auto rounded-md bg-[#FBFBFB] py-1 text-base shadow-lg focus:outline-none sm:text-sm z-50">
              {countriesData.map((country, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-primary-blue opacity-90 text-white"
                        : "text-gray-900"
                    }`
                  }
                  value={country.name.common}
                  // onClick={() => handleSelect(country.name.common)}
                >
                  {({ active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          active ? "font-medium" : "font-normal"
                        }`}
                      >
                        {country.name.common}
                      </span>
                      {active ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
};

export default CountriesListbox;
