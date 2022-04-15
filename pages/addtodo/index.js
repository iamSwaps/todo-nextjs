import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useSession, getSession } from "next-auth/react"


export default  function AddTodo() {
    const [todo, settodo] =useState()
    const { data: session, status } = useSession()
    const doc= session ?
    {
      todo:todo,
      user:session.user.email
    }
    :
    {
      todo:todo,
      user:"global"
    }
    async function onSubmitHandler(e){
      e.preventDefault()
      await fetch('../api/todos',{
      method:"POST",
      body:JSON.stringify(doc),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      settodo("")
        
    }
    const handleChange = (e)=>{
        settodo(e.target.value)
    }
  return (
    <div>
        <div>
            <small className="text-muted" style={{textAlign:"center"}}>If your logged in then todos will be added to "Your Todos" tab</small>
        </div>
        <input type="text" name="todo" onChange={handleChange} value={todo}  required />
        <button type="submit" className="btn btn-info" onClick={onSubmitHandler}>
          Submit
        </button>
    </div>
  );
}
