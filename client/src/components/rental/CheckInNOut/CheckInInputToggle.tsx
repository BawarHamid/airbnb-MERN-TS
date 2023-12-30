import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type CheckInInputToggleProps = {
  labelCIn: string;
  labelCOut: string;
  valueCheckInStart: string;
  valueCheckInSlut: string;
  changeCallbackStart: React.Dispatch<React.SetStateAction<string>>;
  changeCallbackSlut: React.Dispatch<React.SetStateAction<string>>;
};

const CheckInInputToggle: React.FC<CheckInInputToggleProps> = ({
  valueCheckInStart,
  valueCheckInSlut,
  changeCallbackStart,
  changeCallbackSlut,
  labelCIn,
  labelCOut,
}) => {
  const [showInput, setShowInput] = useState<boolean>(false);

  //   const getHeight = () => {
  //     return showInput ? "140px" : "50px";
  //   };

  return (
    <div
      className={`p-4 mb-4 ${
        showInput ? "" : "border-2 border-gray-300 rounded-lg"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShowInput(!showInput)}
      >
        {showInput ? (
          <h2 className="font-bold text-gray-800">Luk indtjekningsvinduet</h2>
        ) : (
          <h2 className="font-bold text-gray-800">Åben indtjekningsvinduet</h2>
        )}
        <ChevronDownIcon
          className={`h-7 w-7 ${showInput ? "transform rotate-180" : ""}`}
        />
      </div>
      {showInput && (
        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-4 mt-3">
          <div className="flex flex-col">
            <h2 className="italic text-gray-500 text-sm">{labelCIn}</h2>
            <input
              onChange={(e) => changeCallbackStart(e.target.value)}
              value={valueCheckInStart}
              type="time"
              className="py-3 pl-3 pr-10 text-left placeholder-gray-400 rounded-lg border-gray-300 border-2 focus:border-black focus:rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-3 md:mt-0">
            <h2 className="italic text-gray-500 text-sm">{labelCOut}</h2>
            <input
              onChange={(e) => changeCallbackSlut(e.target.value)}
              value={valueCheckInSlut}
              type="time"
              className="py-3 pl-3 pr-10 text-left placeholder-gray-400 rounded-lg border-gray-300 border-2 focus:border-black focus:rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckInInputToggle;
