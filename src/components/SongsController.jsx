import React, { useEffect, useState } from 'react'
import { useSongContext } from '../context/SongContext';

const SongsController = () => {
  const { musicData, selectedSong, setSelectedSong } = useSongContext()

  return (
    <div className='w-full bg-[#B23238] h-[75px] border'>
      
    </div>
  )
}

export default SongsController;