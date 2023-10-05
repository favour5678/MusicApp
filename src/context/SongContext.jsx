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

  const addToPlaylist = (songId) => {
    setPlaylist(prevSong => {
      const updatedPlaylist = { ...prevSong, [songId]: prevSong[songId] + 1 }
      return updatedPlaylist;
    })
  }

  const songContextValue = {
    searchSong,
    setSearchSong,
    musicData,
    setMusicData,
    selectedSong,
    setSelectedSong,
    currentSongIndex,
    setCurrentSongIndex,
    addToPlaylist
  };

  return (
    <SongContext.Provider value={songContextValue}>
      {children}
    </SongContext.Provider>
  );
};
