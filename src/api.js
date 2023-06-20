
// Asynchronous Function: a function that takes too long to execute and
//   we don't want to wait to get the result back.
//   An async function ALWAYS returns a Promise<...>
// 
// async: mark a function that needs to call other asynchronous functions
//       

export const loadBeers = async () => {
  const response = await fetch(`https://api.punkapi.com/v2/beers`);
  const beers = await response.json();
  return beers;
}

