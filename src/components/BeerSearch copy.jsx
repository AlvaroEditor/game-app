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
    /*
        const something = "example";
        const beers = await loadWord(something);
        console.log(beers);*/


    setSavedValue(userInput);
    setUserInput("");
    var all_info = await loadWord(userInput);
    console.log(all_info);
    setAllInfo(Array.isArray(all_info) ? all_info : [all_info]);

  };




  return (
    <div>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={saveValue}>Search</button>
      <p>Tu entrada: {word}</p>
       
      {/* <div>
         {allInfo.map((definition, index) => (  
          <div key={index}>
            <p>Phonetics: {definition.phonetics}</p>
      </div> 
        ))}
         */
         
      </div>
      <div class="buttondiv">
        <button onClick={handleSynonymsClick} class="custom-button">Synonyms</button>

        <button onClick={handleAntonymsClick} class="custom-button">Antonyms</button>

        <button onClick={handlePhoneticsClick} class="custom-button">Phonetics</button>

      </div>
      <div>{synonymsInfo && <p>Aquí está la información que deseas mostrar.</p>}</div>
      <div> {antonymsInfo && <p>Aquí está la información que deseas mostrar.</p>}</div>
      <div>{phoneticsInfo && <p>Aquí está la información que deseas mostrar.</p>}</div>

    </div>
  );
}



export default MyComponent;