import React from 'react'

const JokeDisplay = ({jokes}) => {
  return (
    <div>
      {jokes.forEach((joke, index) => {
        <li key={index}>{joke.text}</li>
      })}
    </div>
  )
}

export default JokeDisplay