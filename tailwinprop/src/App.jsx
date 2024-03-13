import { useState } from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center">Hello this is deepak sharma</h1>
    <Cards username="Deepak" button="Click on"/>
    <Cards username="Deepak"/>
    </>
  );
}

export default App;
