import { createContext, useContext, useState } from "react";

const SongContext = createContext();

export const useSongContext = () => {
  return useContext(SongContext);
};

export const SongProvider = ({ children }) => {
  const [musicData, setMusicData] = useState([]);
  const [searchSong, setSearchSong] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playlist, setPlaylist] = useState([])

  const songContextValue = {
    searchSong,
    setSearchSong,
    musicData,
    setMusicData,
    selectedSong,
    setSelectedSong,
    currentSongIndex,
    setCurrentSongIndex,
    playlist,
    setPlaylist
  };

  return (
    <SongContext.Provider value={songContextValue}>
      {children}
    </SongContext.Provider>
  );
};
