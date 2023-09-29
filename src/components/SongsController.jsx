import React, { useState } from "react";
import { useSongContext } from "../context/SongContext";
import { IoIosSkipBackward } from "react-icons/io";
import { IoIosSkipForward } from "react-icons/io";
import ReactH5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.scss";

const SongsController = () => {
  const { musicData, selectedSong, setSelectedSong } = useSongContext();
  const [currentSongIndex, setCurrentSongIndex] = useState(0)

  const handleNextClick = () => {
    if(currentSongIndex < musicData.length - 1) {
      console.log(currentSongIndex);
      console.log('currentSong:', musicData[currentSongIndex].src)
      setCurrentSongIndex(currentSongIndex + 1)
    }
  }

  return (
    <div className="w-full bg-[#B23238] h-[65px] border flex">
      {selectedSong && (
        <div className="flex items-center">
          <img
            src={selectedSong.songImage}
            alt="songImage"
            className="h-[52px] w-14 object-cover object-center ml-1"
          />
          <div className="ml-1">
            <p>{selectedSong.songTitle}</p>
            <p className="text-[13px]">{selectedSong.artistName}</p>
          </div>
          {/* <audio controls key={selectedSong.songUrl}>
            <source src={selectedSong.songUrl} type="audio/mp3"/>
          </audio>
          <IoIosSkipBackward />
          <IoIosSkipForward /> */}
          {/* <ReactAudioPlayer src={selectedSong.songUrl} controls className="bg-transparent"/> */}
          <ReactH5AudioPlayer
            src={selectedSong.songUrl}
            layout="horizontal"
            showJumpControls={false}
            showSkipControls={true}
            onClickNext={handleNextClick}
            showDownloadProgress={false}
            className="my-element"
          />
        </div>
      )}
    </div>
  );
};

export default SongsController;
