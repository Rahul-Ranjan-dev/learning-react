import { useState } from 'react'
export default function Form(){
    const [title,settitle]=useState("")
    const [description,setdescription]=useState("")
    const [notes,setnotes]=useState([])
    function handleSubmit(e){
        e.preventDefault();
        setnotes({...notes,title:title,description:description})
        settitle("")
        setdescription("")
    }
    function handleiChange(event){
    settitle(event.target.value)

  }
  function handletChange(event){
    setdescription(event.target.value)
    
  }
   return(
        <>
    <div className="page">
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <label htmlFor="form-title">enter the title</label>
                    <br/>
                    <input id="form-title"  onChange={handleiChange} value={title} required/>
                </div>
                    <br/><br/>
                <div className="form-content">
                    <label htmlFor="form-description">enter the description</label>
                    <br/>
                    <textarea id="form-description" rows="10" cols="50" onChange={handletChange} value={description} required></textarea>
                </div>
                    <br/><br/>
                <button>add task</button>
            </form>
        </div>
        <div className="show-tasks">
            <div className="task">
                <h1>hello bhai</h1>
                <p>you are excellent</p>
            </div>
            <div className="task">
                <h1>hello bhai</h1>
                <p>you are excellent</p>
            </div>
        </div>
    </div>
        
        </>
    )

}