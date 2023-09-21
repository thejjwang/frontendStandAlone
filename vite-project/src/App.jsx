import { useState, useEffect } from 'react'
import JokeDisplay from './JokeDisplay'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
          const response = await fetch('http://localhost:5001/api/joke')
          const data = await response.json();
          console.log(data)
      } catch (err) {
          console.log('error is' + err)
      }
    }
    fetchApi();
  },[]);


  return (
    <div>
      <button>Get Joke</button>
      <JokeDisplay jokes={jokes}/>
    </div>
  )
}

export default App
