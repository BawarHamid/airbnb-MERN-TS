// import { useEffect, useState } from "react";
import OptionCard from "../../components/cards/OptionCard";
import ProfileHeaderCard from "../../components/cards/ProfileSubHeaderCard";
import UserInfoFormCard from "../../components/cards/UserInfoFormCard";
import { Progress } from "@chakra-ui/react";
// import axios from "axios";
// import { useGetProfileService } from "../../services/UserProfile/UserService";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import RentalsPage from "./RentalsPage";

const ProfilePage: React.FC = () => {
  // const [userData, setUserData] = useState<Record<string, never> | null>(null);
  // const userData = useGetProfileService();
  const { user } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  // useEffect(() => {
  //   axios.get("/profile").then((response) => {
  //     const { data } = response;
  //     // console.log(data);
  //     setUserData(data);
  //   });
  // }, []);

  // if (!ready) {
  //   return (
  //     <div className="text-center animate-pulse">
  //       <p className="font-bold">Loading user data...</p>
  //       <Progress
  //         size="md"
  //         className="mt-5"
  //         isIndeterminate
  //         rounded={"8px"}
  //         colorScheme="facebook"
  //       />
  //     </div>
  //   );
  // }

  return (
    <div>
      {subpage === "profile" && (
        <div className="flex justify-center">
          <div className="flex flex-col">
            <OptionCard
              cardTitle="Konto Oplysninger"
              cardParagraf="Oversigt over dine personlige oplysninger"
            />
            <OptionCard
              cardTitle="Administrer Abonnement"
              cardParagraf="Adminstring af behome's abonnementer"
            />
            <OptionCard
              cardTitle="Konto Oplysninger"
              cardParagraf="Oversigt over dine personlige oplysninger"
            />
            <OptionCard
              cardTitle="Konto Oplysninger"
              cardParagraf="Oversigt over dine personlige oplysninger"
            />
          </div>
          <div className="ml-6">
            <ProfileHeaderCard
              profilePicture="https://gravatar.chjina.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              profilePictureAlt="profilepic.png"
              cardTitle="Upload et nyt profilbillede"
            />
            <div className="mt-5">
              {/* {userData ? (
                <UserInfoFormCard
                  firstName={userData.first_name}
                  lastName={userData.last_name}
                  email={userData.email}
                  phoneNumber={userData.phone_number}
                  address={userData.address}
                  city={userData.city}
                  province={userData.province}
                  zipCode={userData.zip_code}
                  country={userData.country}
                /> */}
              {user ? (
                <UserInfoFormCard
                  firstName={user.firstname}
                  lastName={user.lastname}
                  email={user.email}
                  phoneNumber={user.phonenumber}
                  address={user.address}
                  city={user.city}
                  province={user.province}
                  zipCode={user.zipcode}
                  country={user.country}
                />
              ) : (
                <div className="text-center animate-pulse">
                  <p className="font-bold">Loading user data...</p>
                  <Progress
                    size="md"
                    className="mt-5"
                    isIndeterminate
                    rounded={"8px"}
                    colorScheme="facebook"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {subpage === "profile/my-rentals" && <RentalsPage />}
    </div>
  );
};

export default ProfilePage;
