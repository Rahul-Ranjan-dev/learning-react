import { useState } from "react"
import { v4 as uuid } from 'uuid';
export default function Todo(){
   const [task,settask]=useState([]);
   const [newtask,setnewtask]=useState("")
   const [toggle,settoggle]=useState(true);
   function handleChange(event){
     setnewtask(event.target.value)
   }

    function handleSubmit(){
        settask([...task,{taskv:newtask,taskid:uuid()}])
        setnewtask("")

    }
    function handleUpdate(){
        if (toggle){
       const updatedTask= task.map((array)=>{
            return({...array,taskv:array.taskv.toUpperCase()})
        })
        settask(updatedTask)
        settoggle(false)
    }else{
      const updatedTask= task.map((array)=>{
            return({...array,taskv:array.taskv.toLowerCase()})
        })
        settask(updatedTask)
        settoggle(true)
    }
        
    }
    return(
        <>
        enter your task:<input type="text" onChange={handleChange} value={newtask}/>
        <button onClick={handleSubmit}>add task</button>
     <ul>{task.map((array)=>{
        return(<li key={array.taskid}>{array.taskv}</li>)
     })}

     </ul>  
     <button onClick={handleUpdate}>update all</button>
        </>
    )
}