import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useSongContext } from "../context/SongContext";

const SearchSong = () => {
    const { musicData, setSearchSong } = useSongContext()

  return (
    <div className="flex items-center border border-gray-50 rounded-full w-[70%] h-9 px-2 mt-10">
      <button>
        <BiSearchAlt className="text-xl" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none ml-2 overflow-x-auto"
      />
    </div>
  );
};

export default SearchSong;
