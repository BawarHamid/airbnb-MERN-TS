import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const BookingsPage: React.FC = () => {
  const { user, ready } = useContext(UserContext);

  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1 className="flex justify-start">My bookings/travels</h1>
    </>
  );
};

export default BookingsPage;
