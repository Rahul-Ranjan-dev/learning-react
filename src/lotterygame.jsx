import { useState } from "react"
export default function Lottery(){
  const[number,setnumber]=useState("")
  const[sum,setsum]=useState(null)
  function handleChange(event){
    setnumber(event.target.value)
  }
  function handlesubmit(){

    let total=0;
    let remainder=0;
    let tempnum=parseInt(number)
    while(tempnum>0){
        remainder=tempnum%10
        tempnum=Math.floor(tempnum/10);
        total=total+remainder;

    }
   
    // if(sum===15){
    //    alert("you won the game")
     
    // }
    //     else{
    //       alert("try again")
        
    //     }
        setsum(total)
        setnumber("")
        
    }
  
  return(
    <>
    enter your lotterynumber:<input type="number" max="3" value={number} onChange={handleChange}/>
    <button onClick={handlesubmit}>submit</button>
   
    { sum>=15? (<p>you won the game</p>):(<p>try again</p>)}
    </>
  )
}