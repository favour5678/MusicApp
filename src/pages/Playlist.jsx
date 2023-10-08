import React from "react";
import LeftSection from "../components/LeftSection";
import { useSongContext } from "../context/SongContext";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import SongsController from "../components/SongsController";

const Playlist = () => {
  const { playlist, setPlaylist, selectedSong, setSelectedSong, setCurrentSongIndex } = useSongContext();

  const handleRemoveFromPlaylist = (songId) => {
    const updatedSong = playlist.filter(song => song !== songId)
    setPlaylist(updatedSong)
    if(selectedSong === songId) {
      setSelectedSong(null)
    }
  };

  const handleClickPlay = (song) => {
    setCurrentSongIndex(playlist.indexOf(song));
    setSelectedSong(song);
  };

  return (
    <section className="bg-gradient-to-br from from-[#3B1D26] to-[#111111] w-full h-screen text-gray-200 font-body">
      <div className="container max-w-full flex">
        <LeftSection />
        <div className="w-[78%] h-screen overflow-y-auto mt-5">
          {playlist.map((song) => (
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
              <p className="text-[17px] w-[15%] text-center">
                {song.songTitle}
              </p>
              <p className="text-sm w-[16%] text-center">{song.artistName}</p>
              <p className="text-sm w-[13%] text-center">{song.releaseDate}</p>
              <button
                className="w-[5%] flex justify-center"
                onClick={() => handleClickPlay(song)}
              >
                <BsPlayCircleFill className="text-xl text-[#3B1D26] text-center" />
              </button>
              <button
                className="w-[5%] flex justify-center"
                onClick={() => handleRemoveFromPlaylist(song)}
              >
                <AiOutlineMinus className="text-center" />
              </button>
            </div>
          ))}
          <div className="mt-20">
        <SongsController />
      </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
