import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type SetHouseRulesToggleProps = {
  valueStart: string;
  valueEnd: string;
  valueOut: string;
  valuePrice: number;
  valueMaxGuests: number;
  changeCallbackStart: React.Dispatch<React.SetStateAction<string>>;
  changeCallbackEnd: React.Dispatch<React.SetStateAction<string>>;
  changeCallbackOut: React.Dispatch<React.SetStateAction<string>>;
  changeCallbackPrice: React.Dispatch<React.SetStateAction<number>>;
  changeCallbackMaxGuests: React.Dispatch<React.SetStateAction<number>>;
  labelStart: string;
  labelEnd: string;
  labelOut: string;
  labelPrice: string;
  labelMaxGuests: string;
};

const SetHouseRulesToggle: React.FC<SetHouseRulesToggleProps> = ({
  valueStart,
  valueEnd,
  valueOut,
  valuePrice,
  valueMaxGuests,
  changeCallbackStart,
  changeCallbackEnd,
  changeCallbackOut,
  changeCallbackPrice,
  changeCallbackMaxGuests,
  labelStart,
  labelEnd,
  labelOut,
  labelPrice,
  labelMaxGuests,
}) => {
  const [showInput, setShowInput] = useState<boolean>(false);

  //   const getHeight = () => {
  //     return showInput ? "140px" : "50px";
  //   };

  return (
    <div
      // className={`p-4 ${
      //   showInput ? "border-2 border-gray-300 rounded-lg" : ""
      // }`}
      className="p-4 border-2 border-gray-300 rounded-lg"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShowInput(!showInput)}
      >
        {showInput ? (
          <h2 className="font-bold text-gray-800">
            Luk Indtjeknings- og udtjekningsvinduet
          </h2>
        ) : (
          <h2 className="font-bold text-gray-800">
            Åben Indtjeknings- og udtjekningsvinduet
          </h2>
        )}
        <ChevronDownIcon
          className={`h-7 w-7 ${
            showInput
              ? "transform rotate-180 text-primary-red"
              : "text-gray-400"
          }`}
        />
      </div>
      {showInput && (
        // <div className="flex flex-col md:flex-row md:flex-wrap md:gap-4 mt-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mt-5 w-full">
          <div className="flex flex-col">
            <h2 className="italic text-gray-500 text-sm mb-3 text-start">
              {labelStart}
            </h2>
            <input
              onChange={(e) => changeCallbackStart(e.target.value)}
              value={valueStart}
              type="time"
              className="w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 rounded-lg border-gray-300 border-2 focus:border-primary-medium-black focus:bg-[#fcfafa] focus:rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-3 md:mt-0">
            <h2 className="italic text-gray-500 text-sm mb-3 text-start">
              {labelEnd}
            </h2>
            <input
              onChange={(e) => changeCallbackEnd(e.target.value)}
              value={valueEnd}
              type="time"
              className="w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 rounded-lg border-gray-300 border-2 focus:border-primary-medium-black focus:bg-[#fcfafa] focus:rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-3 md:mt-0">
            <h2 className="italic text-gray-500 text-sm mb-3 text-start">
              {labelOut}
            </h2>
            <input
              onChange={(e) => changeCallbackOut(e.target.value)}
              value={valueOut}
              type="time"
              className="w-full py-3 pl-3 pr-10 text-left placeholder-gray-400 rounded-lg border-gray-300 border-2 focus:border-primary-medium-black focus:bg-[#fcfafa] focus:rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-3 md:mt-0">
            <h2 className="italic text-gray-500 text-sm mb-3 text-start">
              {labelPrice}
            </h2>
            <div className="relative">
              <span className="absolute inset-y-0 right-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 512 512"
                >
                  <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" />
                </svg>
              </span>
              <input
                onChange={(e) => changeCallbackPrice(e.target.value)}
                value={valuePrice}
                type="number"
                className="w-full py-3 pl-3 pr-3 text-left placeholder-gray-400 rounded-lg border-gray-300 border-2 focus:border-primary-medium-black focus:bg-[#fcfafa] focus:rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col mt-3 md:mt-0">
            <h2 className="italic text-gray-500 text-sm mb-3 text-start">
              {labelMaxGuests}
            </h2>
            <div className="relative">
              <span className="absolute inset-y-0 right-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 576 512"
                >
                  <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
                </svg>
              </span>
              <input
                onChange={(e) => changeCallbackMaxGuests(e.target.value)}
                value={valueMaxGuests}
                type="number"
                className="w-full py-3 pl-3 pr-3 text-left placeholder-gray-400 rounded-lg border-gray-300 border-2 focus:border-primary-medium-black focus:bg-[#fcfafa] focus:rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetHouseRulesToggle;
