import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { ImPlus } from "react-icons/im";
import { useSongContext } from "../context/SongContext";

const RightSection = () => {
  const { musicData, setMusicData, setSearchSong } = useSongContext();

  useEffect(() => {
    const apiUrl = "https://robo-music-api.onrender.com/music/my-api";
   
    axios.get(apiUrl)
      .then(response => {
        setMusicData(response.data);
        return response;
      }).then(response => {
        setSearchSong(response)
      })
      .catch(error => {
        console.log("Error fetching music data", error);
      });
  }, []);

  return (
    <section className="w-[78%] h-screen overflow-y-auto">
      <div className="flex mx-auto text-[15px] border border-t-0 border-r-0 border-l-0 mb-4 mt-3 w-[95%]">
        <h4 className="w-[12%] text-center ml-[19%]">#Song</h4>
        <h4 className="w-[7%] text-center ml-[13%]">#Artist</h4>
      </div>
      {musicData.map(song => (
        <div
          key={song.id}
          className="flex mx-auto justify-between items-center bg-[#B23238] mb-5 w-[95%]"
        >
          <p className="w-[10%]">
            <img
              src={song.songImage}
              alt="songImage"
              className="w-full h-20 object-cover object-center"
            />
          </p>
          <p className="text-[17px] w-[15%] text-center">{song.songTitle}</p>
          <p className="text-sm w-[16%] text-center">{song.artistName}</p>
          <p className="text-sm w-[13%] text-center">{song.releaseDate}</p>
          <button className="w-[5%] flex justify-center">
            <BsPlayCircleFill className="text-xl text-[#3B1D26] text-center" />
          </button>
          <button className="w-[5%] flex justify-center">
            <ImPlus className="text-center" />
          </button>
        </div>
      ))}
    </section>
  );
};

export default RightSection;
