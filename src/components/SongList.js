import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NewSongForm from './NewSongForm'

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ])

  const [age, setAge] = useState(20)
  const incrementAge = () => {
    setAge(age + 1)
  }

  const addSong = title => {
    setSongs([...songs, { title, id: uuidv4() }])
  }

  useEffect(() => {
    console.log('useEffect', songs)
  }, [songs])

  useEffect(() => {
    console.log('useEffect', age)
  }, [age])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={incrementAge}>Add 1 to Age: {age}</button>
    </div>
  )
}

export default SongList
