import axios from "axios";
import { useState } from "react";

type ImgUploaderProps = {
  addedImgs: string[];
  changeCallback: React.Dispatch<React.SetStateAction<string[]>>;
};

const ImgUploader: React.FC<ImgUploaderProps> = ({
  addedImgs,
  changeCallback,
}) => {
  const [imgUrl, setImgUrl] = useState("");

  const addWithUrl = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-url", {
      url_link: imgUrl,
    });

    changeCallback((prev) => {
      return [...prev, filename];
    });
    setImgUrl("");
  };

  const uploadImage = (e: { preventDefault: () => void }) => {
    const files = e.target.files;

    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("images", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        changeCallback((prev) => [...prev, ...filenames]);
      });
  };

  const removeAddedImage = (
    e: { preventDefault: () => void },
    filename: string
  ) => {
    e.preventDefault();
    changeCallback([...addedImgs.filter((img) => img !== filename)]);
  };

  const selectAsMainImg = (
    e: { preventDefault: () => void },
    filename: string
  ) => {
    e.preventDefault();
    changeCallback([filename, ...addedImgs.filter((img) => img !== filename)]);
  };

  return (
    <>
      <div className="flex gap-2 items-center mt-4">
        <input
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          placeholder="Indsæt URL"
          className="outline-none border-2 border-gray-300 rounded-lg select-none py-3 pl-3 pr-10 text-left w-full placeholder:text-gray-400 focus:border-primary-medium-black focus:rounded-full"
        />
        {/* <button className="bg-primary-blue hover:bg-primary-blue hover:opacity-80 text-white font-semibold rounded-lg py-3 px-3 active:bg-blue-400"> */}
        <button
          disabled={!imgUrl}
          onClick={addWithUrl}
          className="bg-primary-medium-black hover:bg-black text-white font-semibold rounded-lg py-3 px-6 active:scale-90 transition-transform active:rounded-full"
        >
          Tilføj
        </button>
      </div>
      <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-3 mt-5">
        {/* <div className="mt-4 flex flex-col gap-3"> */}
        {Array.isArray(addedImgs) &&
          addedImgs.length > 0 &&
          addedImgs.map((url, index) => (
            <div className="flex relative h-48" key={index}>
              <img
                src={"http://localhost:4000/" + url}
                className="rounded-lg w-full object-cover"
                alt="ImgFromUrl"
              />
              <button
                onClick={(ev) => removeAddedImage(ev, url)}
                className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <button
                onClick={(ev) => selectAsMainImg(ev, url)}
                className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3"
              >
                {imgUrl === addedImgs[0] && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {imgUrl !== addedImgs[0] && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        <label className="h-48 flex flex-col items-center gap-2 justify-center border border-gray-300 border-dashed rounded-lg p-2 cursor-pointer">
          {/* <label className="cursor-pointer border border-dashed border-gray-300 rounded-lg flex flex-col items-center w-fit p-11 gap-3"> */}
          <input
            type="file"
            name="imgs"
            multiple
            className="hidden"
            onChange={uploadImage}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="h-11 w-10"
          >
            <path d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg>
          <div className="text-center">
            <p className="font-semibold text-black">
              Træk dine billeder herhen
            </p>
            <p className="text-sm text-gray-500 italic">
              Vælg mindst fem billeder
            </p>
          </div>
        </label>
      </div>
    </>
  );
};

export default ImgUploader;
