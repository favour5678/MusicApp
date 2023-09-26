import { createContext, useContext, useState } from "react";

const SongContext = createContext();

export const useSongContext = () => {
  return useContext(SongContext);
};

export const SongProvider = ({ children }) => {
  const [musicData, setMusicData] = useState([]);
  const [searchSong, setSearchSong] = useState([]);

  return (
    <SongContext.Provider
      value={{ searchSong, setSearchSong, musicData, setMusicData }}
    >
      {children}
    </SongContext.Provider>
  );
};
