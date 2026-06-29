import { useState } from "react"
export default function Lottery(){
  const[number,setnumber]=useState("")
  const[attempted,setattempted]=useState([])
  function handleChange(event){
    setnumber(event.target.value)
  }
  function handlesubmit(){
    let sum=0;
    let remainder=0;
    let tempnum=parseInt(number)
    while(tempnum>0){
        remainder=tempnum%10
        tempnum=Math.floor(tempnum/10);
        sum=sum+remainder;

    }
   
    if(sum===15){
        alert("you won the game")
    }
        else{
            alert("you lost the game,better luck next time")
        }
    }
  
  return(
    <>
    enter your lotterynumber:<input type="number" max="3" value={number} onChange={handleChange}/>
    <button onClick={handlesubmit}>submit</button>
    </>
  )
}