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
    setTask([...task, { taskv: newTask, taskid: uuid(), marked: false }]);
    setNewTask("");
  }

  function handleUpdate() {
    if (toggle) {
      const updatedTask = task.map((array) => ({
        ...array,
        taskv: array.taskv.toUpperCase(),
      }));
      setTask(updatedTask);
      setToggle(false);
    } else {
      const updatedTask = task.map((array) => ({
        ...array,
        taskv: array.taskv.toLowerCase(),
      }));
      setTask(updatedTask);
      setToggle(true);
    }
  }

  function handleMark(id) {
    const markedTask = task.map((array) =>
      array.taskid === id ? { ...array, marked: true } : array
    );
    setTask(markedTask);
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
            {array.taskv}
            <button onClick={() => handleMark(array.taskid)}>Mark as done</button>
          </li>
        ))}
      </ul>

      <button onClick={handleUpdate}>Update All</button>
    </>
  );
}
