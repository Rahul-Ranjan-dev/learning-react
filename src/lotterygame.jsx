import { useState } from "react"
export default function Lottery(){
  const[number,setnumber]=useState("")
  const[sum,setsum]=useState(null)
  const [message,setmessage]=useState("")
  const [arra,setarra]=useState([])
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
   
    if(total===15){
       setarra([])
       setmessage("you won the game")
     
    }
        else{
          setarra([...arra,number])
          setmessage("try again")
        
        }
        
        setsum(total)
        setnumber("")

        
    }
  
  return(
    <>
    enter your lotterynumber:<input type="number" max="3" value={number} onChange={handleChange}/>
    <button onClick={handlesubmit}>submit</button>
    
    <div className="lotterybox">
      <p>the numbers you attempted</p>
    <ul>
      {arra.map((array)=>{
        return(
      <li>
        {array}
      </li>)})}
    </ul>
    </div>
   
    <p>{message}</p>
    </>
  )
}