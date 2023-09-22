import React from 'react'

const JokeDisplay = ({jokeById, randomJoke}) => {
 // added jokeById.id && trying to handle if user inputted id isnt in the joke array
 // needs work
  return (
    <div>
      <h3>{randomJoke.text}</h3>
      
      <h3>{jokeById.id && jokeById.text}</h3>
    </div>
  )
}

export default JokeDisplay