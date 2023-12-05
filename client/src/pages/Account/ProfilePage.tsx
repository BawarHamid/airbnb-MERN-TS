import axios from "axios";
import { useContext, useEffect, useState } from "react";
import OptionCard from "../../components/cards/OptionCard";
import ProfileHeaderCard from "../../components/cards/ProfileHeaderCard";
import UserInfoFormCard from "../../components/cards/UserInfoFormCard";
import { UserContext } from "../../context/UserContext";

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<Record<string, never>>({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get("/profile").then((response) => {
      const { data } = response;
      console.log(data);
      setUserData(data);
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col ml-6">
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
          {!!user && (
            <UserInfoFormCard
              firstName={userData.firstname || "no user found"}
              lastName={userData.lastname || "no user found"}
              email={userData.email || "no user found"}
              phoneNumber={""}
              address={""}
              city={""}
              country={""}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
