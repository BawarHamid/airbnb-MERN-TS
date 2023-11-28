import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/Authentication/SignInPage";
import SignUpPage from "./pages/Authentication/SignUpPage";
import HeaderLayout from "./components/layouts/HeaderLayout";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import ProfilePage from "./pages/Account/ProfilePage";
import BookingsPage from "./pages/Account/BookingsPage";
import RentalsPage from "./pages/Account/RentalsPage";
import ProfileLayout from "./components/layouts/ProfileLayout";

// axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<HeaderLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/register" element={<SignUpPage />} />
          </Route>

          <Route path="/" element={<ProfileLayout />}>
            <Route index path="/profile" element={<ProfilePage />} />
            <Route path="/my-bookings" element={<BookingsPage />} />
            <Route path="/my-rentals" element={<RentalsPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
};

export default App;
