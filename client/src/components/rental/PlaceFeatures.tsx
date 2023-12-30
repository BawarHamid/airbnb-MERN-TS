// import { ReactElement } from "react";

// type PlaceFeaturesProps = {
//   icon: ReactElement;
//   name: string;
//   selectedFeatures: string[];
//   setSelectedFeatures: React.Dispatch<React.SetStateAction<string[]>>;
// };

// const PlaceFeatures: React.FC<PlaceFeaturesProps> = ({
//   icon,
//   name,
//   selectedFeatures,
//   setSelectedFeatures,
// }) => {
//   const isSelected = selectedFeatures.includes(name);

//   const handleSelectFeatures = () => {
//     if (isSelected) {
//       setSelectedFeatures(
//         selectedFeatures.filter((selectedName) => selectedName !== name)
//       );
//     } else {
//       setSelectedFeatures([...selectedFeatures, name]);
//     }
//   };

//   return (
//     <>
//       <button
//         role="checkbox"
//         type="button"
//         className={`border border-gray-300 rounded-lg hover:border-black flex flex-col items-center py-5 select-none active:scale-90 transition-transform ${
//           isSelected ? "border border-black" : "border-gray-300"
//         }`}
//         onClick={handleSelectFeatures}
//       >
//         <div>{icon}</div>
//         <h2 className="text-black font-semibold">{name}</h2>
//       </button>
//     </>
//   );
// };

// export default PlaceFeatures;

import { ReactElement } from "react";

type PlaceFeaturesProps = {
  icon: ReactElement;
  name: string;
  selectedFeatures: string[];
  setSelectedFeatures: React.Dispatch<React.SetStateAction<string[]>>;
};

const PlaceFeatures: React.FC<PlaceFeaturesProps> = ({
  icon,
  name,
  selectedFeatures,
  setSelectedFeatures,
}) => {
  const isSelected = selectedFeatures.includes(name);

  const handleSelectFeatures = () => {
    if (isSelected) {
      setSelectedFeatures(
        selectedFeatures.filter((selectedName) => selectedName !== name)
      );
    } else {
      setSelectedFeatures([...selectedFeatures, name]);
    }
  };

  return (
    <>
      <button
        role="checkbox"
        type="button"
        className={`flex flex-col items-center py-4 focus:outline-none select-none rounded-xl border-2 border-gray-300 hover:border-black active:scale-95 transition-transform ${
          isSelected
            ? "border border-primary-medium-black bg-[#fcfafa]"
            : "border-gray-300"
        }`}
        onClick={handleSelectFeatures}
      >
        <div className="mb-2">{icon}</div>
        <h2 className="text-black font-semibold">{name}</h2>
      </button>
    </>
  );
};

export default PlaceFeatures;
