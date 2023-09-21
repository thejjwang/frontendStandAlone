import React from 'react'

const JokeDisplay = ({jokes, randomJoke}) => {
  return (
    <div>
      {jokes.forEach((joke, index) => {
        <li key={index}>{joke.text}</li>
      })}
      <h3>{randomJoke.text}</h3>
    </div>
  )
}

export default JokeDisplay