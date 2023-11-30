import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const RentalsPage: React.FC = () => {
  const { user, ready } = useContext(UserContext);

  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>mine boliger til udlejning</h1>
    </>
  );
};

export default RentalsPage;
