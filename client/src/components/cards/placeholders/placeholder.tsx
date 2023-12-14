// const [countriesData, setCountriesData] = useState<string[]>([]);

// useEffect(() => {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((response) => response.json())
//     .then((data) => {
//       // console.log(data);
//       setCountriesData(data);
//     })
//     .catch((error) => {
//       console.error("Error fetching countries data:", error);
//     });
// }, []);
// console.log(editedCountry);

// <FormControl isRequired>
//               <FormLabel className="text-primary-red" fontSize={"small"}>
//                 Land:
//               </FormLabel>
//               <select
//                 className="outline-none border border-primary-blue rounded-lg py-2 px-2 w-[230px] font-bold bg-[#FBFBFB]"
//                 onChange={(e) => setEditedCountry(e.target.value)}
//                 value={editedCountry}
//                 style={{ height: "2.66rem" }}
//               >
//                 <option value="none" disabled selected className="font-bold">
//                   Vælg et land
//                 </option>
//                 {countriesData.map((country, index) => (
//                   <option key={index} value={country.name.common}>
//                     <img
//                       src={country.flags.svg || country.flags.png}
//                       alt={`${country.name.common} flag`}
//                       style={{ width: "20px", marginRight: "5px" }}
//                     />
//                     {country.name.common}
//                   </option>
//                 ))}
//               </select>
//             </FormControl>
//           </div>
//           <div className="mt-5">
//             <button
//               type="submit"
//               value={editedAddress}
//               onChange={(e) => setEditedAddress(e.target.value)}
//               className="rounded-lg py-2 font-bold px-2 w-[495px] bg-primary-blue text-white select-none border hover:bg-primary-blue hover:bg-opacity-70 active:bg-blue-700 active:bg-opacity-80"
//             >
//               Opdater Information
//             </button>

// {Object.keys(userData).length > 0 ? (
//     <UserInfoFormCard
//       firstName={userData.firstname}
//       lastName={userData.lastname}
//       email={userData.email}
//       phoneNumber={""}
//       address={""}
//       city={""}
//       country={""}
//     />
//   ) : (
//     <p>Loading user data...</p>
//   )}

// useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data);
//         setCountriesData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching countries data:", error);
//       });
//   }, []);
//   console.log(editedCountry);

// {countriesData.map((country, index) => (
//     <option key={index} value={country.name.common}>
//       <img
//         src={country.flags.svg || country.flags.png}
//         alt={`${country.name.common} flag`}
//         style={{ width: "20px", marginRight: "5px" }}
//       />
//       {country.name.common}
