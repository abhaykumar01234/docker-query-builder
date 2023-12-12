import React,{useState} from "react";
import TodoForm from './TodoForm';

const Todo = ({todos,completeTodo,removeTodo,updateTodo}) =>{
    const [edit,editTodo] =useState({
        id:null,
        value:''
    });

    const  submitUpdate = value => {
        updateTodo(edit.id,value)
        editTodo({
            id:null,
            value:''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo,index) =>(
        <div
            className={todos.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                
        </div>
    ))
}

export default Todo
