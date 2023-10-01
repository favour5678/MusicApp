import React, { useState } from "react";
import { useSongContext } from "../context/SongContext";
import ReactH5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.scss";

const SongsController = () => {
  const { musicData, selectedSong, currentSongIndex, setCurrentSongIndex } = useSongContext();
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const currentSong = musicData[currentSongIndex];

  const handleNextClick = () => {
    if (currentSongIndex < musicData.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  return (
    <div className="w-[76.72%] bg-[#B23238] h-[65px] border flex fixed bottom-0">
      {/* <div className="w-full bg-[#B23238] h-[65px] border flex fixed bottom-0"> */}
      {currentSong && (
        <div className="flex items-center">
          <p className="w-[15%] ml-2">
            <img
              src={currentSong.songImage}
              alt="songImage"
              className="h-[52px] w-14 object-cover object-center"
            />
          </p>
          <div className="w-[20%] pl-2">
            <p>{currentSong.songTitle}</p>
            <p className="text-[13px]">{currentSong.artistName}</p>
          </div>
          <div className="w-[80%]">
            <ReactH5AudioPlayer
              className="my-element"
              src={currentSong.songUrl}
              layout="horizontal"
              showJumpControls={false}
              showSkipControls={true}
              onClickNext={handleNextClick}
              onClickPrevious={handlePreviousClick}
              showDownloadProgress={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SongsController;
