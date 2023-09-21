import React, { useState } from 'react'

const SearchSong = ({ onSearch }) => {
    const [songQuery, setSongQuery] = useState('')

    const handleSearch = () => {
        onSearch(songQuery)
    }
  return (
    <div>SearchSong</div>
  )
}

export default SearchSong