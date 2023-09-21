import { useState, useEffect } from 'react';
import JokeDisplay from './JokeDisplay';

function App() {
  const [jokes, setJokes] = useState([]);
  const [userAmount, setUserAmount] = useState('');
  const [randomJoke, setRandomJoke] = useState('');

    const fetchRandomJoke = async () => {
      try {
          const response = await fetch('http://localhost:5001/api/joke')
          const data = await response.json();
          console.log(data)
          setRandomJoke(data)
      } catch (err) {
          console.log('error is' + err)
      }
    }

  const handleClick = () => {
    setUserAmount(userAmount);
  }

  return (
    <div>
      <div className=''>
        <h1>Joke Generator</h1>
      </div>

      <button onClick={fetchRandomJoke}>Get Random Joke</button>
      <input placeholder='Enter #' type='number' value={userAmount} onChange={(e)=>e.target.value}></input>
      <button onClick={handleClick}>Get {userAmount} Jokes</button>
      <JokeDisplay jokes={jokes} randomJoke={randomJoke}/>
    </div>
  )
}

export default App
