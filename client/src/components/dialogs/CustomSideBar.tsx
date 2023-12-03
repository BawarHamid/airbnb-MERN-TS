// import { useContext } from "react";
// import { UserContext } from "../../../context/UserContext";
// import { Link, Navigate } from "react-router-dom";

// const svgWhiteFill = {
//   fill: "#FFFFFF", // White fill color for the svg
// };

// const CustomSideBar: React.FC = () => {
//   const { user, ready, logout } = useContext(UserContext);

//   if (ready && !user) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="left-0 top-0 flex flex-col justify-between bg-primary-red h-screen">
//       <div className="flex flex-col items-center gap-2">
//         <div className="my-5">
//           <a href="/" className="flex items-center gap-1 ml-1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 640 512"
//               style={svgWhiteFill}
//               className="h-9 w-9"
//             >
//               <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
//             </svg>
//             <span className="font-bold text-xl">BeHome's</span>
//           </a>
//         </div>

//         {user ? (
//           <p className="font-bold text-white">
//             {user.firstname} {user.lastname}
//           </p>
//         ) : (
//           <p className="font-bold text-white">Error 404, User not found!</p>
//         )}
//       </div>

//       <ul className="py-7">
//         <Link to="/profile">
//           <div className="flex py-2 px-8 gap-2 text-white hover:bg-red-400">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 448 512"
//               className="h-5"
//               style={svgWhiteFill}
//             >
//               <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
//             </svg>
//             <h2 className="text-white font-bold">Min Profil</h2>
//           </div>
//         </Link>

//         <Link to={"/my-bookings"}>
//           <div className="flex py-2 px-8 gap-2 text-white hover:bg-red-400">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 512 512"
//               className="h-5"
//               style={svgWhiteFill}
//             >
//               <path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" />
//             </svg>
//             <h2 className="text-white font-bold">Mine bookinger</h2>
//           </div>
//         </Link>

//         <Link to={"/my-rentals"}>
//           <div className="flex py-2 px-8 gap-2 text-white hover:bg-red-400">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 640 512"
//               className="h-5"
//               style={svgWhiteFill}
//             >
//               <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64l.7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
//             </svg>
//             <h2 className="text-white font-bold"> Mine udlejninger</h2>
//           </div>
//         </Link>
//       </ul>
//       <div className="w-full p-8">
//         <button
//           className="bg-primary-red w-full text-white py-2 rounded-3xl text-center font-bold hover:bg-red-400 my-20"
//           onClick={logout}
//         >
//           Log ud
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomSideBar;

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, Navigate } from "react-router-dom";
import CustomSidebarItems from "./items/CustomSideBarItems";

const svgWhiteFill = {
  fill: "#FFFFFF", // White fill color for the svg
};

const CustomSideBar: React.FC = () => {
  const { user, ready, logout } = useContext(UserContext);

  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Sidebar content */}
      <div className="flex flex-col items-center justify-between">
        <div className="my-5">
          <Link to="/" className="flex items-center gap-1 ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              style={svgWhiteFill}
              className="h-9 w-9"
            >
              <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
            </svg>
            <span className="font-bold text-xl">BeHome's</span>
          </Link>
        </div>

        {/* {user ? (
          <p className="font-bold text-white">
            {user.firstname} {user.lastname}
          </p>
        ) : (
          <p className="font-bold text-white">Error 404, User not found!</p>
        )} */}

        <ul className="py-5">
          <CustomSidebarItems
            linkPath="/"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-5"
                style={svgWhiteFill}
              >
                <path d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z" />
              </svg>
            }
            title="Book Rejse"
          />

          <CustomSidebarItems
            linkPath="/profile"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-5"
                style={svgWhiteFill}
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            }
            title="Min Profil"
          />

          <CustomSidebarItems
            linkPath="/my-bookings"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-5"
                style={svgWhiteFill}
              >
                <path d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z" />
              </svg>
            }
            title="Mine Bookinger"
          />
          <CustomSidebarItems
            linkPath="/my-rentals"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="h-5"
                style={svgWhiteFill}
              >
                <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64l.7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
              </svg>
            }
            title="Mine Udlejninger"
          />
          <CustomSidebarItems
            linkPath="/my-rentals"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="h-5"
                style={svgWhiteFill}
              >
                <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64l.7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
              </svg>
            }
            title="Mine Udlejninger"
          />

          <CustomSidebarItems
            linkPath="/my-rentals"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="h-5"
                style={svgWhiteFill}
              >
                <path d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64l.7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
              </svg>
            }
            title="Mine Udlejninger"
          />
        </ul>
      </div>

      {/* Logout button */}
      <div className="flex items-center justify-between p-8">
        <button
          className="bg-primary-red text-white py-2 rounded-3xl text-center font-bold hover:bg-red-400 my-10 px-16 flex items-center w-auto"
          onClick={logout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-5 mr-2"
            style={svgWhiteFill}
          >
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
          </svg>
          Log ud
        </button>
      </div>
    </div>
  );
};

export default CustomSideBar;
