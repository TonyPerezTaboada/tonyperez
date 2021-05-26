import React, { useState } from "react";

function Count() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Count;
