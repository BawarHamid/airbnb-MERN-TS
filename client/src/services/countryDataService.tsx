import { useState, useEffect } from "react";

export const useCountryDataService = () => {
  const [countriesData, setCountriesData] = useState<string[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };

    fetchCountries();
  }, []);

  return countriesData;
};
