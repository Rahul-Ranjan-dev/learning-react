import React, { useState } from "react";


export default function Increase(){
    const [count,setCount]=useState(0);
    console.log("component is rendered")
    console.log(count)
    function incCount(){
       setCount(count+1);
       console.log(`inside count ,${count}`)
       console.log(count)
    }
    return(
        <>
        <h1>hello world</h1>
        <p>count={count}</p>
        <button onClick={incCount}>click to increase</button>
        </>
    )
}