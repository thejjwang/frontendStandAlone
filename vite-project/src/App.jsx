import { useState, useEffect } from "react";
import JokeDisplay from "./JokeDisplay";
import "./index.css";

// logic is right now that the getjoke button will either produce random joke
// if no input is inputted or if a input is there it will produce the joke by id
// so maybe can implment either just use that one button for both random and by id
// or use 2 buttons and make it so if no input is added the button doesnt do anything
// but tells user to input a value if they want to search by id

function App() {
  const [jokeById, setJokeById] = useState("");
  const [userInput, setUserInput] = useState("");
  const [randomJoke, setRandomJoke] = useState("");
  const [showJokeDisplay, setShowJokeDisplay] = useState(false);
  const [requiredTextVisible, setRequiredTextVisible] = useState(false);

  const fetchRandomJoke = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/joke");
      const data = await response.json();
      console.log(data);
      setRandomJoke(data);  
      setJokeById("");
      setShowJokeDisplay(true);
    } catch (err) {
      console.log("error fetching random joke:" + err);
    }
  };

  const fetchJokeById = async (userInput) => {
    if (userInput.trim() === "") {
      setRequiredTextVisible(true);
    } else {
      try {
        const response = await fetch(`http://localhost:5001/api/joke/${userInput}`);
        const data = await response.json();
        console.log(data);
        setJokeById(data);
        setRandomJoke("");
        setShowJokeDisplay(true);
        setRequiredTextVisible(false);
      } catch (err) {
        console.log("error fetching x jokes:" + err);
        setRequiredTextVisible(true);
      }
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen py-12">
      <div className="m-0 p-0">
        <h1 className="text-6xl font-extrabold text-center text-pink-500 my-4">
          Welcome to the Joke Generator
        </h1>
        <p className="text-xl text-center text-gray-600">
          Bringing Laughter to Your Day
        </p>
      </div>
      <div className="gap-6 text-center mt-20">
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          onClick={fetchRandomJoke}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-700 rounded-md group-hover:bg-opacity-0">
            Get A Random Joke
          </span>
        </button>
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          onClick={() => fetchJokeById(userInput)}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-700 rounded-md group-hover:bg-opacity-0">
            Get Joke By Id
          </span>
        </button>
        {requiredTextVisible && (
        <p style={{ color: "red" }}>no id found/incorrect input</p>
        )}
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-400 h-12"
          placeholder="Enter # (joke id)"
          type="number"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
        ></input>
      </div>
      {showJokeDisplay && (
        <JokeDisplay jokeById={jokeById} randomJoke={randomJoke} />
      )}
    </div>
  );
}

export default App;
