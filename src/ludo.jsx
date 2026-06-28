import { useState } from "react";

export default function Ludo() {
  const [count,setCount]=useState({blue:0,red:0,green:0,yellow:0});


  function handleBlue() {
    setCount((prevCount)=>{
      return {...prevCount, blue:prevCount.blue+1}});
   
  }
    function handleRed() {
    setCount((prevCount)=>{
      return {...prevCount, red:prevCount.red+1}});
   
  }
    function handleGreen() {
    setCount((prevCount)=>{
      return {...prevCount, green:prevCount.green+1}});
   
  }
    function handleYellow() {
    setCount((prevCount)=>{
      return {...prevCount,yellow :prevCount.yellow+1}});
    }
 return (
    <>
      <div id="blue">
        <p>bluecount = {count.blue}</p>
        <button  onClick={handleBlue} style={{ backgroundColor: "blue" }}>+1</button>
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
