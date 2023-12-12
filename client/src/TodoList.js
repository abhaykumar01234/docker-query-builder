import React ,{useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () =>{
    const [todos, setTodos] =useState([]);

    const addTodo = todo =>{
        const newTodos =[todo, ...todos]

        if(!todo.text || /^s*$/.test(todo.text)){
            return;
        }

        if(newTodos.length !==0){
            let i=1
            while(i< newTodos.length){
                if(newTodos[i].text===todo.text){
                    
                }
            }
        }
    }
}