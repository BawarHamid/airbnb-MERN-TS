// import { useContext } from "react";
// import { UserContext } from "../../context/UserContext";
// import { Navigate, Outlet } from "react-router-dom";
// import CustomSideBar from "../overlays/dialogs/CustomSideBar";

// const ProfileLayout: React.FC = () => {
//   const { user, ready } = useContext(UserContext);

//   if (ready && !user) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="relative flex min-h-screen">
//       {/* Sidebar */}
//       <div className="fixed left-0 top-0 h-full z-50 w-64">
//         <CustomSideBar />
//       </div>

//       {/* Content */}
//       <div className="ml-64 flex-grow">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default ProfileLayout;
