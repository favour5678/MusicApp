import React from 'react'
import { LuMusic2 } from 'react-icons/lu'
import { CiSearch } from 'react-icons/ci'
import { AiFillHome } from 'react-icons/ai'
import { MdOutlinePlaylistAddCheckCircle } from 'react-icons/md'

const LeftSection = () => {
  return (
        <section>
            <div>
                <LuMusic2 />
                <p>Music</p>
            </div>
            <div>
                <CiSearch />
                <input type="text" placeholder='Search'/>
            </div>
            <h2>Menu</h2>
            <div>
                <AiFillHome />
                <p>Home</p>
            </div>
            <div>
                <MdOutlinePlaylistAddCheckCircle />
                <p>Playlists</p>
            </div>
        </section>
  )
}

export default LeftSection