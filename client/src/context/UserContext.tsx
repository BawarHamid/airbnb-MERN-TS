import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  async function logout() {
    await axios.post("/logout");
    setUser(null);
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
