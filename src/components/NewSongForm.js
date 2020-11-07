import React, { useState } from 'react'

const NewSongForm = ({ addSong }) => {
  const [songTitle, setSongTitle] = useState('')

  const songTitleOnChange = event => {
    setSongTitle(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    // console.log(songTitle)
    addSong(songTitle)
    setSongTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input
        type="text"
        required
        onChange={songTitleOnChange}
        value={songTitle}
      />
      <input type="submit" value="Add song" />
    </form>
  )
}

export default NewSongForm
