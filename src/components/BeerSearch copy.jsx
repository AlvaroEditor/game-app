import React, { useEffect, useRef, useState } from "react";
import { loadWord } from "../api";
import "./buttonstyle.css"

const Meanings = ({ all_info }) => {
  return (
    <div className="meaning-list">
      {all_info.map((all_info) => (
        <><div className="meaning">Type: {all_info.partOfSpeech}</div><div>
          <Definitions all_info={all_info.definitions} />
        </div></>
      ))}
    </div>
  );
};

const Definitions = ({ all_info }) => {
  return (
    <div className="definition-list">
      {all_info.map((all_info) => (
        <><div className="definition"> Definition: {all_info.definition} </div>
          <div className="example">Example: {all_info.example} <h6></h6> </div></>
          

      ))}
    </div>
  );
};

const Words = ({ all_info }) => {
  const [synonymsInfo, setSynonymsInfo] = useState(false);
  const [antonymsInfo, setAntonymsInfo] = useState(false);
  const [phoneticsInfo, setPhoneticsInfo] = useState(false);


  const handleSynonymsClick = () => {
    setSynonymsInfo(!synonymsInfo);
    setAntonymsInfo(false);
    setPhoneticsInfo(false);
  };

  const handleAntonymsClick = () => {
    setAntonymsInfo(!antonymsInfo);
    setPhoneticsInfo(false);
    setSynonymsInfo(false);
  };

  const handlePhoneticsClick = () => {
    setPhoneticsInfo(!phoneticsInfo);
    setAntonymsInfo(false);
    setSynonymsInfo(false);
  };
  /*
  console.log("xxxxxxxxxxxxxx");
  console.log(all_info);
  console.log("xxxxxxxxxxxxxx");
  if (all_info.length === 0) {
    return <div>No word</div>
  }
  */
  return (
    <><div className="word-list">
      {all_info.map((all_info) => (
        <><div className="word">Word: {all_info.word}</div><div>
          <Meanings all_info={all_info.meanings} />
        </div></>
      ))}
    </div>
      <div class="buttondiv">

        <button onClick={handleSynonymsClick} class="custom-button">Synonyms</button>

        <button onClick={handleAntonymsClick} class="custom-button">Antonyms</button>

        <button onClick={handlePhoneticsClick} class="custom-button">Phonetics</button>

      </div>
      <div>{synonymsInfo && <p>Synonyms:</p>}</div>

      <div> {antonymsInfo && <p>Antonyms:</p>}</div>
      <div>{phoneticsInfo && <p>Phonetics:</p>}</div></>


  );
};

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
      <p>Your entry: {word}</p>
      <Words all_info={allInfo} />


      {/*
       <div>
         {allInfo.map((definition, index) => (  
          <div key={index}>
            <p>Phonetics: {definition.phonetics}</p>
      </div> 
        ))}
         
         
      </div>
      */ }
    </div>
  );
}



export default MyComponent;