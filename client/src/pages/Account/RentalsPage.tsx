// // import { useContext } from "react";
// // import { Navigate } from "react-router-dom";
// // import { UserContext } from "../../context/UserContext";

// import OptionCard from "../../components/cards/OptionCard";
// import { useGetProfileService } from "../../services/UserProfile/UserService";

// const RentalsPage: React.FC = () => {
//   // const { user } = useContext(UserContext);
//   const userData = useGetProfileService();

//   return (
//     <div className="">
//       {userData ? (
//         <div className="ml-5 mt-[-25px]">
//           <h1 className="text-3xl text-black font-semibold flex justify-center">
//             Velkommen, {userData.firstname}!
//           </h1>
//           {/* <h2 className="text-xl text-black font-semibold mt-5">
//             Dine aktive udlejningsopslag:
//           </h2> */}
//         </div>
//       ) : (
//         <div className="text-center animate-pulse">
//           <p className="font-bold">Loading user data...</p>
//         </div>
//       )}

//       <div className="ml-10 mt-5">
//         <OptionCard
//           linkRoute="/profile/my-rentals/new"
//           cardTitle="Udlejningsopslag"
//           cardParagraf="oversigt over dine udlejninger"
//         />
//       </div>
//     </div>
//   );
// };

// export default RentalsPage;

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import RentalImg from "../../components/rental/imgs/RentalImg";

const RentalsPage: React.FC = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [rentals, setRentals] = useState([]);
  useEffect(() => {
    axios.get("/user-rentals").then(({ data }) => {
      setRentals(data);
    });
  }, []);

  return (
    <div className="">
      <div className="flex justify-end mx-3 mt-[-15px]">
        <button
          onClick={() => navigate("/profile/my-rentals/new")}
          className="flex items-center gap-2 ml-5 rounded-full bg-blue-100 px-4 py-2 select-none hover:bg-primary-blue hover:bg-opacity-90 hover:text-white active:bg-primary-blue active:bg-opacity-50 active:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p className="font-bold">Påbegynd et nyt opslag</p>
        </button>
      </div>

      <div className="">
        {user ? (
          <div className="ml-5 mt-[-20px]">
            <h1 className="text-3xl text-black font-semibold">
              Velkommen, {user.firstname}
            </h1>
            <h2 className="text-xl text-black font-semibold mt-3 mb-5">
              Dine aktive udlejningsopslag:
            </h2>
          </div>
        ) : (
          <div className="text-center animate-pulse">
            <p className="font-bold">Loading user data...</p>
          </div>
        )}
      </div>
      <div className="mx-4">
        {rentals.length > 0 &&
          rentals.map((rental) => (
            <Link
              to={"/profile/my-rentals/" + rental._id}
              key={rental._id}
              className="cursor-pointer flex gap-4 border bg-white rounded-xl mb-2"
            >
              <div className="max-w-xs">
                <RentalImg rental={rental} />
              </div>
              <div className="flex flex-col p-4 grow">
                <h2 className="text-xl font-semibold">
                  {rental.placeType} i {rental.city}
                </h2>
                <p className="text-sm overflow-hidden overflow-ellipsis">
                  {rental.description}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RentalsPage;
