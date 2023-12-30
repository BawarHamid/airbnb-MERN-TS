type RentalInfoOptionProps = {
  value: number;
  infoText: string;
  changeCallback: React.Dispatch<React.SetStateAction<number>>;
};

const RentalInfoOption: React.FC<RentalInfoOptionProps> = ({
  value,
  infoText,
  changeCallback,
}) => {
  const incrementCount = () => {
    changeCallback((prevValue) => prevValue + 1);
  };

  const decrementCount = () => {
    changeCallback((prevValue) => prevValue - 1);
  };

  return (
    <div className="flex justify-between items-center py-2 border-t border-gray-200 first:border-t-0">
      <div className="flex flex-row">
        <p className="text-black">{infoText}</p>
      </div>

      <div className="flex gap-5 items-center my-3">
        <button
          type="button"
          onClick={incrementCount}
          className="bg-white rounded-full py-2 px-2 border hover:border-transparent hover:bg-gray-200 focus:border-blue-600 focus:outline-none focus:border border-gray-200 active:border-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-4"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </button>
        <div>{value}</div>
        <button
          type="button"
          className="bg-white rounded-full py-2 px-2 border hover:border-transparent hover:bg-gray-200 focus:border-blue-600 focus:outline-none focus:border border-gray-200 active:border-transparent"
          onClick={decrementCount}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-4"
          >
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RentalInfoOption;
