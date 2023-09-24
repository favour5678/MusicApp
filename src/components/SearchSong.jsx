import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useSongContext } from "../context/SongContext";

const SearchSong = () => {
    const { musicData, setSearchSong } = useSongContext()

    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchSong(musicData)

        const songResults = musicData.filter(song => song.songTitle.includes(e.target.value))
        // const songResults = musicData.filter(song => {
        //     song.songTitle.includes(e.target.value) 
        // })

        setSearchSong(songResults)
    }

  return (
    <div className="flex items-center border border-gray-50 rounded-full w-[70%] h-9 px-2 mt-10">
      <button>
        <BiSearchAlt className="text-xl" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none ml-2 overflow-x-auto"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchSong;
