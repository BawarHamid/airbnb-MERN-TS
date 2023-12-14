import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    navigate("/login");
  }

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready, setReady, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// useEffect(() => {
//   // Check if the token exists in local storage
//   const storedToken = localStorage.getItem("token");

//   if (storedToken) {
//     // Set the token in the axios headers for future requests
//     axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;

//     // Fetch user data or perform any necessary actions to set the user context
//     // For example:
//     axios
//       .get("/profile")
//       .then(({ data }) => {
//         setUser(data);
//         setReady(true);
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   }
// }, []);
