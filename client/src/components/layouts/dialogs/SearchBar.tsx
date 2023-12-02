import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import SearchIcon from "../assets/public/magnifying-glass.svg";
import ModelImg from "../assets/public/model-icon.png";
import { SearchBarProps } from "../types/index-types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <img
      src={SearchIcon}
      alt="search icon"
      className="object-contain"
      width={40}
      height={40}
    />
  </button>
);

const SearchBar: React.FC<SearchBarProps> = ({ setManufacturer, setModel }) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
      return alert("Please provide some input");
    }

    setManufacturer(searchManufacturer);
    setModel(searchModel);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img
          src={ModelImg}
          alt="model img"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Passat...."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};
export default SearchBar;
