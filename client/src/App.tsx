import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/Authentication/SignInPage";
import SignUpPage from "./pages/Authentication/SignUpPage";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import AccountPage from "./pages/Account/AccountPage";

// axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const App: React.FC = () => {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/profil" element={<AccountPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
};

export default App;
