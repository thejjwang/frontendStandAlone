import React from 'react'

const JokeDisplay = ({jokeById, randomJoke}) => {
  return (
    <div>
      <h3>{randomJoke.text}</h3>
      <h3>{jokeById.text}</h3>
    </div>
  )
}

export default JokeDisplay