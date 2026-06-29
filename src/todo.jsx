import { useState } from "react";
import { v4 as uuid} from 'uuid';
export default function Todo(){
const [todo,settodo]=useState([{task:"sample task",id:uuid()}])
const [newtodo,setnewtodo]=useState("")
function handlenew(event){
   setnewtodo(event.target.value)
}
function handlesubmit(){
      if (newtodo.trim() !== "") {
      const newTask = { task: newtodo, id: uuidv4() };
      setTodo([...todo, newTask]);
      setNewtodo(""); // clear input
    }
}
    return(
        
        <>
        <div id="todo">
          
          enter new task:  <input id="task" onChange={handlenew} value={newtodo}/>
            <button>Add task</button>
            <hr/>
            <h1>your tasks are</h1>
            <hr/>
            <ul>
                {todo.map((todo)=>(
                <li>{todo.task}</li>
                )) }
            </ul>
        </div>
        </>
    )
}