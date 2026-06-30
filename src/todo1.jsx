import { useState } from "react";
export default function Todo1(){
    const [tasks,settasks]=useState(["sample task"]); 
    const [newTask,setnewTask]=useState("");
    function handleChange(event){
       setnewTask(event.target.value)
    }
    function handleSubmit(){
        settasks([...tasks,newTask])
    }
    return(
        <>
        
        <label htmlFor="newtask">enter new task</label>
        <input id="newtask" placeholder="enter new task" value={newTask} onChange={handleChange} />
        <button onClick={handleSubmit}>add new</button>
        <ul>{tasks.map((task)=><li>{task}</li>)}</ul>
        </>
    )
}