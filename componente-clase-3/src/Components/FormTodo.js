import { useState } from "react";

const TodoList = ()=>{
    const[todo,setTodo]= useState('')
    const [payload, setPayload] = useState(null)
    const changetodo=(e)=> setTodo(e.target.value)

    const handleSubmit =(e)=>{
        e.preventDefault();
        setPayload({todo})
    }
    if(payload){
        return (<h2 >Gracias</h2>) 
    }

    return(
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="inputTodo" placeholder="Add to do">To do</label>
            <input type="text" id="inputTodo" value={todo} onChange={changetodo} />
            <button type="submit">Agregar</button>
            </form>
        </div>

    );

}

export default TodoList