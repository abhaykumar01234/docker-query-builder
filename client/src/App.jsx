import React, { useState } from 'react'
import './App.scss'

const App = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setTodos(t => [...t, {id: new Date().getTime(), todo}])
        setTodo("");
    }

    const handleDelete = tid => {
        setTodos(t => t.filter(({id}) => id !== tid))
    }

    return (
        <div>
            <h1>Todo App</h1>
            <hr />
            <div className="box">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
                        <button>Add</button>
                    </div>
                </form>
                <ul className="lists">
                    {todos.length > 0 
                        ? todos.map(({id, todo}) => <li key={id}>{todo}<button onClick={() => handleDelete(id)}>x</button></li>)
                        : <li>Please add a new Todo</li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default App
