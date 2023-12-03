import React from "react";
import OptionCard from "../../components/cards/OptionCard";

const ProfilePage: React.FC = () => {
  return (
    <div className="">
      <div className="mt-16 flex flex-col justify-start ml-10">
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
    </div>
  );
};

export default ProfilePage;
