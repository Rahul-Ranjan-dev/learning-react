import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Todo() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [toggle, setToggle] = useState(true);

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function handleSubmit() {
    if (newTask.trim() === "") return; // prevent empty tasks
    setTask([...task, { taskv: newTask, taskid: uuid(), marked: false }]);
    setNewTask("");
  }

  function handleUpdate() {
    const updatedTask = task.map((array) => ({
      ...array,
      taskv: toggle ? array.taskv.toUpperCase() : array.taskv.toLowerCase(),
    }));
    setTask(updatedTask);
    setToggle(!toggle);
  }

  function handleMark(id) {
    const markedTask = task.map((array) =>
      array.taskid === id ? { ...array, marked: true } : array
    );
    setTask(markedTask);
  }

  function handleDelete(id) {
    const updatedTasks = task.filter((t) => t.taskid !== id);
    setTask(updatedTasks);
  }

  return (
    <>
      <p>Enter your task:</p>
      <input type="text" onChange={handleChange} value={newTask} />
      <button onClick={handleSubmit}>Add Task</button>

      <ul>
        {task.map((array) => (
          <li
            key={array.taskid}
            style={{
              textDecoration: array.marked ? "line-through" : "none",
            }}
          >
            <span>{array.taskv}</span>
            <button onClick={() => handleDelete(array.taskid)}>Delete</button>
            <button onClick={() => handleMark(array.taskid)}>Mark as done</button>
          </li>
        ))}
      </ul>

      <button onClick={handleUpdate}>Update All</button>
    </>
  );
}
