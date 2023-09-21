import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RightSection = () => {
  const [musicData, setMusicData] = useState([])
  
  useEffect(() => {
    const apiUrl = 'https://robo-music-api.onrender.com/music/my-api'

    axios.get(apiUrl)
      .then(response => {
        setMusicData(response.data)
        console.log(response.data)
      }) .catch(error => {
        console.log('Error fetching music data', error);
      })
    }, [])


  return (
    <section className='w-[78%] h-screen overflow-y-auto'>
      {musicData.map(song => (
        <div key={song.id}>
          {song.id}
        </div>
      ))}
    </section>
  )
}

export default RightSection