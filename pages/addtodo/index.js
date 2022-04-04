import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default  function AddTodo() {
    const [todo, settodo] =useState()
    async function onSubmitHandler(e){
        e.preventDefault()
        await fetch('../api/todos',{
        method:"POST",
        body:todo
        })
        settodo("")
    }
    const handleChange = (e)=>{
        settodo(e.target.value)
    }
  return (
    <div>
        <input type="text" name="todo" onChange={handleChange} value={todo}  required />
        <button type="submit" className="btn btn-info" onClick={onSubmitHandler}>
          Submit
        </button>
    </div>
  );
}
