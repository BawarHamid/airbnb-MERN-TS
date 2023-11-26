import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

// export function UserContextProvider(children: ReactNode) {
//   const [user, setUser] = useState(null);
//   const [ready, setReady] = useState(false);

//   return (
//     <UserContext.Provider value={{ user, setUser, ready, setReady }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready, setReady }}>
      {children}
    </UserContext.Provider>
  );
}
