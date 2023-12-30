import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import CustomSideBar from "../dialogs/CustomSideBar";
import ProfileHeader from "../headers/ProfileHeader";

const ProfileLayout: React.FC = () => {
  const { user, ready } = useContext(UserContext);

  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  return (
    // <div className="flex min-h-screen">
    //   {/* Sidebar */}
    //   <div className="fixed inset-0 z-40 w-64 sm:relative sm:w-auto sm:h-screen bg-primary-blue">
    //     <CustomSideBar />
    //   </div>

    //   {/* Content */}
    //   <div className="flex-grow">
    //     {/* ProfileHeader */}
    //     <ProfileHeader />

    //     {/* Content */}
    //     <div className="mt-12">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 z-40 w-64 sm:w-auto md:w-auto h-full bg-primary-blue">
        <CustomSideBar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-grow pl-[17rem]">
        {/* ProfileHeader */}
        <ProfileHeader />
        {/* Content */}
        <div className="mt-[7.2rem] flex-grow">
          {/* <div className="mt-12 flex-grow"> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
