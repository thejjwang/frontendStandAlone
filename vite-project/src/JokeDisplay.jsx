import React from "react";

const JokeDisplay = ({ jokeById, randomJoke }) => {
  // added jokeById.id && trying to handle if user inputted id isnt in the joke array
  // needs work
  return (
    <div className="flex justify-center h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md mt-10 w-11/12 max-w-xl">
        <h3 className="text-lg font-semibold text-center">
          {randomJoke.text}
        </h3>
        <h3 className="text-lg font-semibold text-center">
          {jokeById.text}
        </h3>
      </div>
    </div>
  );
};

export default JokeDisplay;
