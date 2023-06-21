import React, { useState } from "react";

function MyComponent() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleChange} />
      <button>Search</button>
      <p>Tu entrada: {userInput}</p>
      
    </div>
  );
}

export default MyComponent;