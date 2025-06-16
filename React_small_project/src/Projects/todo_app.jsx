import './todo.css'
import { useState } from 'react';

export const Todo_App = ({ onAddTodo }) => {
    const [inputVal, setInputVal] = useState({ id: "", content: "", checked: false });

    const handleInput = (event) => {
        setInputVal({
            id: event.target.value,
            content: event.target.value,
            checked: false
        });
    };

   
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputVal.content.trim()) return; // Prevent empty items
        onAddTodo(inputVal);
        setInputVal({ id: "", content: "", checked: false });
    };

    return (
        <form onSubmit={handleSubmit}>
            <section className="todo-input-section">
                <input
                    type="text"
                    name="inputVal"
                    value={inputVal.content}
                    onChange={handleInput}
                    placeholder="Type here"
                    className="todo-input"
                />
                <button className="todo-button" type="submit">
                    Submit
                </button>
            </section>
        </form>
    );
}