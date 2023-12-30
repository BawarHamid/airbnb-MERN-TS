import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type PlaceTypeListboxProps = {
  value: string;
  changeCallback: React.Dispatch<React.SetStateAction<string>>;
};

const accommodationTypes = [
  "Lejlighed",
  "Hus",
  "Værelse",
  "Villa",
  "Sommerhuse",
  "Hytte",
  "Gæstehus",
  "Slot",
];

const PlaceTypeListbox: React.FC<PlaceTypeListboxProps> = ({
  value,
  changeCallback,
}) => {
  const [showBorder, setShowBorder] = useState(false);
  const listBoxRef = useRef(null);
  // const [accommodations, setAccommodations] = useState<string[]>([value]);

  const handleSelect = (value) => {
    changeCallback(value);
    setShowBorder(false); // Hide the border after an option is selected
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (listBoxRef.current && !listBoxRef.current.contains(event.target)) {
        setShowBorder(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Listbox value={value} onChange={handleSelect}>
        <div className="relative mt-1" ref={listBoxRef}>
          <Listbox.Button
            className={`relative w-full cursor-default rounded-lg focus:outline-none bg-white py-3 pl-3 pr-10 text-left shadow-sm sm:text-sm ${
              showBorder
                ? "border-gray-700 border-2 font-semibold text-black"
                : "border-gray-300 border-2 text-black"
            }`}
            onClick={() => setShowBorder(true)} // Show the border on click
          >
            <span className="block truncate">{value || "Vælg bolig type"}</span>
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
              {accommodationTypes.map((accommodation, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-primary-blue opacity-90 text-white"
                        : "text-gray-900"
                    }`
                  }
                  value={accommodation}
                  onClick={() => handleSelect(accommodation)}
                >
                  {({ active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          active ? "font-medium" : "font-normal"
                        }`}
                      >
                        {accommodation}
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

export default PlaceTypeListbox;
