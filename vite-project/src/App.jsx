import { useState, useEffect } from "react";
import JokeDisplay from "./JokeDisplay";
import './index.css'


// logic is right now that the getjoke button will either produce random joke
// if no input is inputted or if a input is there it will produce the joke by id
// so maybe can implment either just use that one button for both random and by id
// or use 2 buttons and make it so if no input is added the button doesnt do anything
// but tells user to input a value if they want to search by id


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
    <div className="bg-gray-200 min-h-screen py-0">
      <div className="m-0 p-0">
        <h1 className="text-2xl font-semibold text-center text-blue-500 my-4">Joke Generator</h1>
      </div>

      <button onClick={fetchRandomJoke}>Get Random Joke</button>
      <input
        placeholder="Enter # (joke id)"
        type="number"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        required
      ></input>
      <button onClick={()=> fetchJokeById(userInput)}>Get Joke</button>
      <JokeDisplay jokeById={jokeById} randomJoke={randomJoke} />
    </div>
  );
}

export default App;
