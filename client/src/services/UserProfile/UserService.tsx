import { useState, useEffect } from "react";
import axios from "axios";

// export const useGetProfileService = () => {
//   const [userData, setUserData] = useState<Record<string, never> | null>(null);

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get("/profile");
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setUserData(null);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   return userData;
// };

export const useGetProfileService = () => {
  const [userData, setUserData] = useState<Record<string, never> | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("/profile");
        setUserData(response.data || {}); // Set default value if response.data is falsy
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData({}); // Set default value on error
      }
    };

    fetchProfileData();
  }, []);

  return userData;
};
