import React, { useState } from "react";
import "./App.css";

function App() {
  
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");  
  const [result, setResult] = useState("");  

  // Handle search button click
  // const handleSearch = () => {
  //   const foundWord = dictionary.find(
  //     (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
  //   );
    
  //   if (foundWord) {
  //     setResult(foundWord.meaning);  
  //   } else {
  //     setResult("Word not found in the dictionary.");  
  //   }
  // };
  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();
     if (!trimmedSearchTerm) {
          setResult("Please enter a word to search.");
          return;
        }
    const foundWord = dictionary.find(
          (entry) => entry.word.toLowerCase() === trimmedSearchTerm.toLowerCase()
        );
    if (foundWord) {
          setResult(foundWord.meaning);
        } else {
          setResult("Word not found in the dictionary.");
        }
      };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  
        />
        <button onClick={handleSearch}>Search</button>
        <p>Definition:</p>
      </div>
      <div>
        <p>{result || " "}</p>
      </div>
    </div>
  );
}

export default App;
