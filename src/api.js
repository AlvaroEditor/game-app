
// Asynchronous Function: a function that takes too long to execute and
//   we don't want to wait to get the result back.
//   An async function ALWAYS returns a Promise<...>
// 
// async: mark a function that needs to call other asynchronous functions
//       

export const loadWord = async (something) => {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${something}`);
  const allinfo = await response.json();
  return allinfo;
}

