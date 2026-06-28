import { useState } from "react";

export default function Ludo() {
  // const [bluecount, setBluecount] = useState(0);
  // const [redcount, setRedcount] = useState(0);
  // const [greencount, setGreencount] = useState(0);
  // const [yellowcount, setYellowcount] = useState(0);
  const [count,setCount]=useState({blue:0,red:0,green:0,yellow:0});
//   console.log(bluecount);
//   console.log("rendered")

  function handleBlue() {
    console.log(count.blue)
    setCount(count.blue + 1);
   
  }
  function handleRed() {
    console.log(count.red)
    setCount(count.red + 1);
  }
  function handleGreen() {
    setCount(count.green + 1);
  }
  function handleYellow() {
    setCount(count.yellow + 1);
  }

  return (
    <>
      <div id="blue">
        <p>bluecount = {count.blue}</p>
        <button onClick={handleBlue} style={{ backgroundColor: "blue" }}>+1</button>
      </div>

      <div id="red">
        <p>redcount = {count.red}</p>
        <button onClick={handleRed} style={{ backgroundColor: "red" }}>+1</button>
      </div>

      <div id="green">
        <p>greencount = {count.green}</p>
        <button onClick={handleGreen} style={{ backgroundColor: "green" }}>+1</button>
      </div>

      <div id="yellow">
        <p>yellowcount = {count.yellow}</p>
        <button onClick={handleYellow} style={{ backgroundColor: "yellow" }}>+1</button>
      </div>
    </>
  );
}
