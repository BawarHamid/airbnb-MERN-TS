// import { ReactElement } from "react";

// type RentalImgProps = {
//     rental: ReactElement;
// }

// const RentalImg: React.FC<RentalImgProps> = ({rental}) => {

//     return (
//         <img
//         className={className}
//         src={"http://localhost:4000/uploads/" + rental.images[index]}
//         alt=""
//       />
//     );
// };

// export default RentalImg;

export default function RentalImg({ rental, index = 0, className = null }) {
  if (rental && rental.imgs?.length) {
    if (!className) {
      className = "w-full h-full object-cover rounded-lg aspect-square";
    }

    return (
      <img
        className={className}
        src={"http://localhost:4000/" + rental.imgs[index]}
        alt=""
      />
    );
  }

  return null;
}
