import "./todo.css";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export const TodoApp = () => {
    const [inputVal, setInputVal] = useState("");
    const [list, setList] = useState([]);


    const handleInput = (event) => {
        setInputVal(event.target.value);
    };

    const handleDelete = (value) =>{ //value is a parameter and item in the function is an argument
        
        const updatedTask = list.filter((item) => (item !== value))
        setList(updatedTask);

    }

    const handleClear = () =>{
       setList([]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputVal.trim() === "") return; // Prevent empty items
        setList((prev) => [...prev, inputVal]);
        setInputVal("");
    };

    return (
        <div className="todo-container">
            <h2 className="todo-title">
                The Todo App - Your Ultimate Helper
            </h2>
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
            <ul className="todo-list">
                {list.map((item, index) => {
                    return(
                    <li key={index} className="todo-item">
                        <h3 className="todo-text">{item}</h3>
                        <button className="todo-button"><TiTick /></button>
                        <button className="todo-delete" onClick={()=>handleDelete(item)}><MdDelete /></button>
                    </li>

)})}
            </ul>
            <button className="todo-button" onClick={handleClear}>Clear All</button>
        </div>
    );
};