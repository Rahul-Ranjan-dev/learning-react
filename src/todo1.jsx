import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function Todo1(){
    const [tasks,settasks]=useState([{v:"sample task",id:uuid(),isMarked:false}]); 
    const [newTask,setnewTask]=useState("");
    const [toggle,settoggle]=useState(true)
    function handleChange(event){
       setnewTask(event.target.value)
    }
    function handleSubmit(){
        settasks([...tasks,{v:newTask,id:uuid(),isMarked:false}])
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
    function handleDelete(id){
      const updateTask=tasks.filter((task)=>task.id!==id)
      settasks(updateTask)
    }
    function handleMark(id){
          const MarkTask=tasks.map((task)=>{
            if(task.id==id){
              return   {...task,isMarked:!task.isMarked}
            }
            else{
                return task;
            }
            
          })
          settasks(MarkTask)
    }
    return(
        <>
        
        <label htmlFor="newtask">enter new task</label>
        <input id="newtask" placeholder="enter new task" value={newTask} onChange={handleChange} />
        <button onClick={handleSubmit}>add new</button>
        <ul>{tasks.map((task)=><li key={task.id} style={{ textDecoration:task.isMarked==true? "line-through":"none"}}>{task.v}
            <button onClick={()=>handleUpdate(task.id)}>update</button>
            <button onClick={()=>handleDelete(task.id)}>delete</button>
            <button onClick={()=>handleMark(task.id)}>markasdone</button>
        </li>)}</ul>
        </>
    )
}