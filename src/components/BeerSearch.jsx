import React, { useEffect, useRef, useState } from "react";
import { loadWord } from "../api";

const WordList = ({ word }) => {
  console.log(word);
  if (word === null) {
    return <div>Loading...</div>;
  }
  if (word.length === 0) {
    return <div>This word does not exist.</div>;
  }
  return (
    <div className="Word-list">
      {word.map((word) => (
        <div className="Word">{word.meanings}</div>
      ))}
    </div>
  );
};
const word = "example";
const all_info = await loadWord(word);
console.log(all_info);

function WordSearch() {
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [word, setWord] = useState(null);

  useEffect(() => {
    loadWord().then((word) => setWord(word));
  }, []);

  const doSearch = (event) => {
    event.preventDefault();
    // TODO
  };

  return (
    <div className="beer-search">
      <form onSubmit={doSearch}>
        <input type="text" ref={searchRef} />
        <button>Search</button>
      </form>
      <WordList word={word} />
    </div>
  );
}

export default WordSearch;
