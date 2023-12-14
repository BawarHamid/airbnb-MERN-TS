import { useRef, useState } from "react";

type ProfileHeaderCardProps = {
  profilePicture: string;
  profilePictureAlt: string;
  cardTitle: string;
};

const ProfileHeaderCard: React.FC<ProfileHeaderCardProps> = ({
  profilePicture,
  profilePictureAlt,
  cardTitle,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click event
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file); // Store the selected file in the component state
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          // Update the profilePicture with the selected file
          profilePicture = reader.result;
        }
      };
    }
  };

  return (
    <div className="max-w-2xl w-screen outline-none py-8 px-8 my-2 focus:border focus:border-blue-600 focus:bg-slate-50 rounded-lg shadow-lg shadow-[#E4E3E9]">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-grow">
          <img
            src={
              selectedFile ? URL.createObjectURL(selectedFile) : profilePicture
            }
            className="rounded-full w-24 h-24"
            alt={profilePictureAlt}
          />
          <div className="ml-4 flex flex-col">
            <h2 className="font-bold text-black text-start text-lg truncate">
              {cardTitle}
            </h2>
            <p className="text-gray-500 text-start text-base italic">
              {profilePictureAlt}
            </p>
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*" // Optional: limit file selection to images
        />
        <button
          className="select-none border text-primary-blue border-primary-blue rounded-lg py-2 px-4 font-bold text-base hover:bg-blue-200 hover:bg-opacity-30 active:bg-blue-600 active:bg-opacity-30"
          onClick={handleButtonClick}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default ProfileHeaderCard;
