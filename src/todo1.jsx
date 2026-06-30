import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function Todo1(){
    const [tasks,settasks]=useState([{v:"sample task",id:uuid()}]); 
    const [newTask,setnewTask]=useState("");
    const [toggle,settoggle]=useState(true)
    function handleChange(event){
       setnewTask(event.target.value)
    }
    function handleSubmit(){
        settasks([...tasks,{v:newTask,id:uuid()}])
        setnewTask("")
    }
    function handleUpdate(id){
    const updateTask=tasks.map((task)=>{
    if(task.id==id){
        return {...task,v:task.v.toUpperCase()}
        
    }
       else{
        return task;
       }
    })
      settasks(updateTask)
    }
    return(
        <>
        
        <label htmlFor="newtask">enter new task</label>
        <input id="newtask" placeholder="enter new task" value={newTask} onChange={handleChange} />
        <button onClick={handleSubmit}>add new</button>
        <ul>{tasks.map((task)=><li key={task.id}>{task.v}
            <button onClick={()=>handleUpdate(task.id)}>update</button>
        </li>)}</ul>
        </>
    )
}