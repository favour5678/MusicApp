import { createContext, useContext, useState } from "react";

const SongContext = createContext();

export const useSongContext = () => {
  return useContext(SongContext);
};

export const SongProvider = ({ children }) => {
  const [musicData, setMusicData] = useState([]);
  const [searchSong, setSearchSong] = useState([]);
  const [songs, setSongs] = useState([])
  const [currentSong, setCurrentSong] = useState(null)

  return (
    <SongContext.Provider
      value={{ searchSong, setSearchSong, musicData, setMusicData, songs, setSongs, currentSong, setCurrentSong }}
    >
      {children}
    </SongContext.Provider>
  );
};
