import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharactor, setIsCharactor] = useState(true);
  const [password, setPassword] = useState("");

  const passwordref = useRef(null);
  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isCharactor) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    if (isNumber) str += "0123456789";
    for (let i = 1; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, isNumber, isCharactor, setPassword]);

  const copyCickBord = useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerate();
  }, [length, isNumber, isCharactor, passwordGenerate]);
  return (
    <>
      <h1>Password Generator</h1>
      <div>
        <input type="text" value={password} readOnly ref={passwordref} />{" "}
        <button onClick={copyCickBord}>Copy</button>
        <div>
          <input
            type="range"
            min={6}
            max={15}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <span>{length}</span> <br />
          <input
            type="checkbox"
            defaultChecked={isNumber}
            onChange={() => setIsNumber((prev) => !prev)}
          />
          <span>Number</span>
          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={isCharactor}
            onChange={() => setIsCharactor((prevj) => !prevj)}
          />{" "}
          <span>Charactor</span>
        </div>
      </div>
    </>
  );
}

export default App;
