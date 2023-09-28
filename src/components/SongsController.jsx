import React from "react";
import { useSongContext } from "../context/SongContext";
import { IoIosSkipBackward } from 'react-icons/io'
import { IoIosSkipForward } from 'react-icons/io'
import ReactAudioPlayer from "react-audio-player";
import ReactH5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'

const SongsController = () => {
  const { musicData, selectedSong, setSelectedSong } = useSongContext();

  return (
    <div className="w-full bg-[#B23238] h-[65px] border flex">
      {selectedSong && (
        <div className="flex items-center">
          <img src={selectedSong.songImage} alt="songImage" className="h-[52px] w-14 object-cover object-center"/>
          <div>
            <p>{selectedSong.songTitle}</p>
            <p className="text-[13px]">{selectedSong.artistName}</p>
          </div>
          {/* <audio controls key={selectedSong.songUrl}>
            <source src={selectedSong.songUrl} type="audio/mp3"/>
          </audio>
          <IoIosSkipBackward />
          <IoIosSkipForward /> */}
          {/* <ReactAudioPlayer src={selectedSong.songUrl} controls className="bg-transparent"/> */}
        <ReactH5AudioPlayer src={selectedSong.songUrl} layout="horizontal" className="bg-none"/>
        </div>
      )}
    </div>
  );
};

export default SongsController;
