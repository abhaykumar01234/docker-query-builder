import React ,{useState,useEffect,useRef} from "react";

const TodoForm=(props) =>{
    const [input,setInput]=useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange=e=> {
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
    

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })

        setInput('');
    }

return(
    <div>
        <form onSubmit={handleSubmit} className="tod0-form">
            {
                props.edit ?(
                    <>
                        <input type="text" placeholder="Edit" value={input} name="text" className="todo-input edit" onChange={handleCahnge} ref={inputRef} />
                        <button onSubmit={handleSubmit} className="todo-button">Update </button>
                    </>
                ):
                (
                    <>
                     <input type="text" placeholder="Add" value={input} name="text" className="todo-input" onChange={handleCahnge} ref={inputRef} />
                        <button onSubmit={handleSubmit} className="todo-button">Add todo </button>   
                    </>
                )
            }

        </form>
    </div>
)

}

export default TodoForm;