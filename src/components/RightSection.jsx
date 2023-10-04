import axios from "axios";
import React, { useEffect } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { ImPlus } from "react-icons/im";
import { useSongContext } from "../context/SongContext";
import SongsController from "./SongsController";

const RightSection = () => {
  const {
    musicData,
    setMusicData,
    searchSong,
    setSelectedSong,
    setCurrentSongIndex,
  } = useSongContext();

  useEffect(() => {
    const apiUrl = "https://robo-music-api.onrender.com/music/my-api";

    axios
      .get(apiUrl)
      .then((response) => {
        setMusicData(response.data);
        return response;
      })
      .catch((error) => {
        console.error("Error fetching music data", error);
      });
  }, []);

  const handleClickPlay = (song) => {
    console.log("Audio", song.songUrl);
    setCurrentSongIndex(musicData.indexOf(song));
    setSelectedSong(song);
  };

  const combinedData = searchSong.length ? searchSong : musicData;

  return (
    <section className="w-[78%] h-screen overflow-y-auto">
      <div className="flex mx-auto text-[15px] border border-t-0 border-r-0 border-l-0 mb-4 mt-3 w-[95%]">
        <h4 className="w-[12%] text-center ml-[19%]">#Song</h4>
        <h4 className="w-[7%] text-center ml-[13%]">#Artist</h4>
      </div>
      {combinedData.map((song) => (
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
          <button
            className="w-[5%] flex justify-center"
            onClick={() => handleClickPlay(song)}
          >
            <BsPlayCircleFill className="text-xl text-[#3B1D26] text-center" />
          </button>
          <button className="w-[5%] flex justify-center">
            <ImPlus className="text-center" />
          </button>
        </div>
      ))}
      <div className="mt-20">
        <SongsController />
      </div>
    </section>
  );
};

export default RightSection;
