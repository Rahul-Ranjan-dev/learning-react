export default function Todo(){
    const todo=["your sample task"]
    function handleSubmit(event){
       console.log(event.target.value)
    }
    return(
        
        <>
        <div id="todo">
            <label for="task">enter your task</label>
            <input id="task"/>
            <button onClick={handleSubmit}>Add task</button>
            <hr/>
            <h1>your tasks are</h1>
            <hr/>
            <ul>
                <li>{todo[0]}</li>
            </ul>
        </div>
        </>
    )
}