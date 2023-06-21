import React, { useState } from "react";
import { loadWord } from "../api";

function MyComponent() {
  const [userInput, setUserInput] = useState("");
  const [savedValue, setSavedValue] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  const saveValue = () => {
    setSavedValue(userInput);
    setUserInput("");
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={saveValue}>Search</button>
      <p>Tu entrada: {savedValue}</p>
      

    </div>
    
  );
}

export default MyComponent;