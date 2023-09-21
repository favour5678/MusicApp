import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RightSection = () => {
  const [musicData, setMusicData] = useState([])

  useEffect(() => {
    const apiUrl = 'https://robo-music-api.onrender.com/music/my-api'
    // const limit =10
    // const apiUrl = `https://robo-music-api.onrender.com/music/my-api?limit=${limit}`

    axios.get(apiUrl)
      .then(response => {
        setMusicData(response.data)
        console.log(response.data)
      }).catch(error => {
        console.log('Error fetching music data', error);
      })
  }, [])


  return (
    <section className='w-[78%] h-screen overflow-y-auto'>
      {musicData.map(song => (
        <div key={song.id} className='flex items-center space-x-6 bg-[#B23238] mb-5'>
          <p>{song.songTitle}</p>
          <p>{song.artistName}</p>
          <p>
            <img src={song.songImage} alt="songImage" />
          </p>
          <p>{song.releaseDate}</p>
        </div>
      ))}
    </section>
  )
}

export default RightSection