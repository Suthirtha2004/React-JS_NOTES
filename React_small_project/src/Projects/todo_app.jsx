import './todo.css'
import { useState } from 'react';


export const Todo_App = ({onAddTodo}) =>{
     const [inputVal, setInputVal] = useState("");

     const handleInput = (event) => {
        setInputVal(event.target.value);

    };

     const handleSubmit = (event) => {
        event.preventDefault();
        if (inputVal.trim() === "") return; // Prevent empty items
        onAddTodo(inputVal);
        setInputVal("");
    };
    return(
        <>
        <form onSubmit={handleSubmit}>
                <section className="todo-input-section">
                    <input
                        type="text"
                        name="inputVal"
                        value={inputVal}
                        onChange={handleInput}
                        placeholder="Type here"
                        className="todo-input"
                    />
                    <button className="todo-button" type="submit">
                        Submit
                    </button>
                </section>
            </form>
        </>
    )
}