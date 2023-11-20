import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/Authentication/SignInPage";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route index element={<SignInPage />} />
        <Route index element={<SignInPage />} />
      </Routes>
    </div>
  );
};

export default App;
