import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Counter Value is {count}</h1>
      <button onClick={addValue}>ADD</button>
      <br />
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Remove
      </button>
    </>
  );
}

export default App;
