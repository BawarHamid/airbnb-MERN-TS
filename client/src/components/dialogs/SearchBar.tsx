import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

type SearchBarProps = {
  icon: ReactElement;
  searchBarText: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ icon, searchBarText }) => {
  const navigate = useNavigate();
  return (
    // <div className="my-2 ml-10">
    //   <InputGroup>
    //     <Input
    //       // _hover={{ borderColor: "blue.600" }} // Define hover border color here
    //       placeholder={searchBarText}
    //       backgroundColor={"white"}
    //       className="text-gray-600 italic text-start py-6 flex items-center"
    //       rounded={"8px"}
    //     />
    //     <InputRightElement className="hover:cursor-pointer" onClick={() => {}}>
    //       {icon}
    //     </InputRightElement>
    //   </InputGroup>

    //   <input
    //     className="text-gray-600 bg-white italic text-start py-2 rounded-lg w-[40rem] focus:border-[px] focus:border-blue-600"
    //     placeholder={searchBarText}
    //   >
    //     <div>{icon}</div>
    //   </input>
    // </div>
    <div className="my-2 ml-10 relative">
      <input
        className="outline-none placeholder-gray-600 text-gray-600 bg-gray-50 italic text-start py-2 pl-5 rounded-lg w-[45rem] border focus:border-blue-600 focus:bg-white"
        placeholder={searchBarText}
      />
      <div
        className="absolute inset-y-0 right-0 flex items-center hover:cursor-pointer mr-4"
        onClick={() => navigate("/my-bookings")}
      >
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default SearchBar;
