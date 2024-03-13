import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ccc");
  return (
    <>
      <div className="w-screen h-screen" style={{ background: color }}>
        <div className="m-auto pt-5" style={{width:"fit-content"}}>
          <button onClick={()=>setColor("red")}>Red</button>
          <button onClick={()=>setColor("orange")}>Orange</button>
          <button onClick={()=>setColor("blue")}>blue</button>
          <button onClick={()=>setColor("#ccc")}>grey</button>
          <button onClick={()=>setColor("#000")}>black</button>
        </div>
      </div>
    </>
  );
}

export default App;
