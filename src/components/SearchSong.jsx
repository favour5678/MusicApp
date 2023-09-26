import React from "react";
import { useSongContext } from "../context/SongContext";

const SearchSong = () => {
  const { musicData, setSearchSong } = useSongContext();

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();

    if (!searchValue) {
      setSearchSong(musicData);
    } else {
      const songResults = musicData.filter((song) =>
        song.songTitle.toLowerCase().includes(searchValue)
      );
      setSearchSong(songResults);
    }
  };

  return (
    <div className="flex items-center border border-gray-50 rounded-full w-[70%] h-9 px-2 mt-10">
      <input
        type="text"
        placeholder="Search song"
        className="bg-transparent outline-none ml-2 overflow-x-auto"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchSong;
