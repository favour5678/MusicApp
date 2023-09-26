import React from 'react'
import { useSongContext } from '../context/SongContext';

const SongController = () => {
  const { musicData } = useSongContext()

  return (
    <div className='w-full bg-[#B23238] h-[75px] border'>
    {musicData.map(song => (
     <div key={song.id}>
        
     </div>
    ))}
    </div>
  )
}

export default SongController;