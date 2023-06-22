import React, { useEffect, useRef, useState } from "react";
import { loadWord } from "../api";
import "./buttonstyle.css"

function MyComponent() {
  const [userInput, setUserInput] = useState("");
  const [word, setSavedValue] = useState("");
  const [allInfo, setAllInfo] = useState([]);
  const [synonymsInfo, setSynonymsInfo] = useState(false);
  const [antonymsInfo, setAntonymsInfo] = useState(false);
  const [phoneticsInfo, setPhoneticsInfo] = useState(false);

  const handleSynonymsClick = () => {
    setSynonymsInfo(!synonymsInfo);
  };

  const handleAntonymsClick = () => {
    setAntonymsInfo(!antonymsInfo);
  };

  const handlePhoneticsClick = () => {
    setPhoneticsInfo(!phoneticsInfo);
  };

  useEffect(() => {
    loadWord().then((allInfo) => setAllInfo(allInfo));
  }, []);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  const saveValue = async () => {

    const something = "example";
    const beers = await loadWord(something);
    console.log(beers);
    /*
    setSavedValue(userInput);
    setUserInput("");
    all_info = await loadWord(userInput);

    setAllInfo(Array.isArray(all_info) ? all_info : [all_info]);
    */
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
      <div class="buttondiv">
        <button onClick={handleSynonymsClick} class="custom-button">Synonyms</button>
        {synonymsInfo && <p>Aquí está la información que deseas mostrar.</p>}
        <button onClick={handleAntonymsClick} class="custom-button">Antonyms</button>
        {antonymsInfo && <p>Aquí está la información que deseas mostrar.</p>}
        <button onClick={handlePhoneticsClick} class="custom-button">Phonetics</button>
        {phoneticsInfo && <p>Aquí está la información que deseas mostrar.</p>}
      </div>
    </div>







  );
}



export default MyComponent;