import React from 'react'
import { useSongContext } from '../context/SongContext';

const SongController = () => {
  const { musicData } = useSongContext()

  return (
    <div className='w-full bg-blue-400 h-20'>
    {musicData.map((song) => (
     <div key={song.id}>
       {/* <audio controls src={song.songUrl}>{song.songUrl}</audio> */}
     </div>
    ))}
    </div>
  )
}

export default SongController;