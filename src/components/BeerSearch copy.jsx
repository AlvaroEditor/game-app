import React, { useEffect, useRef, useState } from "react";
import { loadWord } from "../api";

function MyComponent() {
  const [userInput, setUserInput] = useState("");
  const [word, setSavedValue] = useState("");
  const [allInfo, setAllInfo] = useState(null);

    
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  const saveValue = async () => {
    setSavedValue(userInput);
    setUserInput("");
    const all_info = await loadWord(userInput);
    console.log(allInfo);
    setAllInfo(all_info);

  };



  return (
    <div>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={saveValue}>Search</button>
      <p>Tu entrada: {word}</p>
      {allInfo && <p>Tu salida: {allInfo}</p>}
    </div>







  );
}



export default MyComponent;