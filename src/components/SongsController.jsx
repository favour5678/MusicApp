import React, { useEffect, useState } from "react";
import { useSongContext } from "../context/SongContext";
import { IoIosSkipBackward } from 'react-icons/io'
import { IoIosSkipForward } from 'react-icons/io'

const SongsController = () => {
  const { musicData, selectedSong, setSelectedSong } = useSongContext();

  return (
    <div className="w-full bg-[#B23238] h-[60px] border">
      {selectedSong && (
        <div className="flex items-center">
          <img className="h-14" src={selectedSong.songImage} alt="songImage" />
          <span>
            <p>{selectedSong.songTitle}</p>
            <p>{selectedSong.artistName}</p>
          </span>
          <audio controls key={selectedSong.songUrl}>
            <source src={selectedSong.songUrl} type="audio/mp3"/>
          </audio>
            <IoIosSkipBackward />
            <IoIosSkipForward />
        </div>
      )}
    </div>
  );
};

export default SongsController;
