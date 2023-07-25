import React, { useState } from "react";
import { puppyList } from "./data.js"; // Make sure the correct path is used for data.js
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p key={puppy.id}>{puppy.name}</p>
      ))}
    </div>
  );
}

export default App;
