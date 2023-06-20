import React, { useEffect, useRef, useState } from "react";
import { loadBeers } from "../api";

const BeerList = ({ beers }) => {
  console.log(beers);
  if (beers === null) {
    return <div>Loading...</div>;
  }
  if (beers.length === 0) {
    return <div>No beers.</div>;
  }
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <div className="beer">{beer.name}</div>
      ))}
    </div>
  );
};

function BeerSearch() {
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    loadBeers().then((beers) => setBeers(beers));
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
      <BeerList beers={beers} />
    </div>
  );
}

export default BeerSearch;
