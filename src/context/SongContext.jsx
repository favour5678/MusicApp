import { createContext, useContext, useState } from "react";

const SongContext = createContext();

export const useSongContext = () => {
  return useContext(SongContext)
}

export const SongProvider = ({ children }) => {
  const [searchSong, setSearchSong] = useState('')
  const [musicData, setMusicData] = useState([]);
  const [filteredSong, setFilteredSong] = useState([])

  return (
    <SongContext.Provider value={{ searchSong, setSearchSong, filteredSong, setFilteredSong, musicData, setMusicData }}>
      {children}
    </SongContext.Provider>
  )
}