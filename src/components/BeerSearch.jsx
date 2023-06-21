import React, { useEffect, useRef, useState } from "react";
import { loadWord } from "../api";

/*
const WordList = ({ wordList }) => {
  console.log(wordList);
  if (wordList === null) {
    return <div>Loading...</div>;
  }
  if (wordList.length === 0) {
    return <div>This word does not exist.</div>;
  }
  return (
    <div className="Word-list">
      {wordList.map((word) => (
        <div className="Word" key={word.id}>
        {word.meanings}
      </div>
      ))}
    </div>
  );
};
*/
const word = "HOLA"
const all_info = await loadWord(word);


function WordSearch() {
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [wordList, setWordList] = useState(null);
  useEffect(() => {
    loadWord().then((word) => setWordList(word));
  }, []);

  const doSearch = (event) => {
    event.preventDefault();
    const userInput = searchRef.current.value;
    setSearch(userInput);
    // TODO
    loadWord(userInput).then((result) => setWordList(result));
  };

  return (
    <div className="beer-search">
      <form onSubmit={doSearch}>
        <input type="text" ref={searchRef} />
        <button>Search</button>
      </form>
      
      <WordList wordList={wordList} />
    </div>
    
  );
}

export default WordSearch;
