import { useState, useEffect } from "react";
import JokeDisplay from "./JokeDisplay";

function App() {
  const [jokeById, setJokeById] = useState("");
  const [userInput, setUserInput] = useState("");
  const [randomJoke, setRandomJoke] = useState("");

  const fetchRandomJoke = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/joke");
      const data = await response.json();
      console.log(data);
      setRandomJoke(data);
    } catch (err) {
      console.log("error fetching random joke:" + err);
    }
  };

  const fetchJokeById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/joke/${id}`);
      const data = await response.json();
      console.log(data);
      setJokeById(data);
    } catch (err) {
      console.log("error fetching x jokes:" + err);
    }
  }
  
  return (
    <div>
      <div className="">
        <h1>Joke Generator</h1>
      </div>

      <button onClick={fetchRandomJoke}>Get Random Joke</button>
      <input
        placeholder="Enter # (joke id)"
        type="number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button onClick={()=> fetchJokeById(userInput)}>Get Joke</button>
      <JokeDisplay jokeById={jokeById} randomJoke={randomJoke} />
    </div>
  );
}

export default App;
