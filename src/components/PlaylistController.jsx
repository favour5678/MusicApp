import React from "react";
import { useSongContext } from "../context/SongContext";
import ReactH5AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.scss";

const PlaylistController = () => {
  const { playlist, currentSongIndex, setCurrentSongIndex } = useSongContext();

  const currentSong = playlist[currentSongIndex];

  const handleNextClick = () => {
    if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  return (
    <div className="w-full bg-[#B23238] h-[65px] border flex fixed bottom-0">
      {currentSong && (
        <div className="flex items-center">
          <p className="ml-2 w-16">
            <img
              src={currentSong.songImage}
              alt="songImage"
              className="h-[52px] w-14 object-cover object-center"
            />
          </p>
          <div className="pl-2 w-36">
            <p>{currentSong.songTitle}</p>
            <p className="text-[13px]">{currentSong.artistName}</p>
          </div>
          <div className="w-32">
            <ReactH5AudioPlayer
              className="changed_styles"
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

export default PlaylistController;
