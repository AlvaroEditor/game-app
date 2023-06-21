import React, { useEffect, useRef, useState } from "react";
import { loadWord } from "../api";

function MyComponent() {
  const [userInput, setUserInput] = useState("");
  const [word, setSavedValue] = useState("");
  const [allInfo, setAllInfo] = useState([]);

  useEffect(() => {
    loadWord().then((allInfo) => setAllInfo(allInfo));
  }, []);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  const saveValue = async () => {
    setSavedValue(userInput);
    setUserInput("");
    all_info = await loadWord(userInput);

    setAllInfo(Array.isArray(all_info) ? all_info : [all_info]);

  };



  return (
    <div>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={saveValue}>Search</button>
      <p>Tu entrada: {word}</p>
      <div>
        { /* {allInfo.map((definition, index) => (  
          <div key={index}>
            <p>Phonetics: {definition.phonetics}</p>
      </div> 
        ))}
          {allInfo.map((definition, index) => (
          <div key={index}>
            <p>Phonetics:</p>
            {definition.phonetics.map((phonetic, phoneticIndex) => (
              <p key={phoneticIndex}>{phonetic.text}</p>
            ))}
          </div>
        ))}
        */}
       
      </div>
    </div>







  );
}



export default MyComponent;