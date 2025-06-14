import "./todo.css";
import { Todo_App } from "./todo_app";
import { Todo_items } from "./todo_items";
import { useState } from "react";

//todo list
export const TodoApp = () => {
    const [list, setList] = useState([]);

    const handleClear = () => {
        setList([]);
    };

    const handleAddTodo = (inputVal) => {
        setList((prev) => [...prev, inputVal]);
    };

    const handleDelete = (value) => {
        setList((prev) => prev.filter((item) => item !== value));
    };

    return (
        <div className="todo-container">
            <h2 className="todo-title">
                The Todo App - Your Ultimate Helper
            </h2>
            <Todo_App onAddTodo={handleAddTodo} />
            <ul className="todo-list">
                <Todo_items items={list} onDelete={handleDelete} />
            </ul>
            <button className="todo-button" onClick={handleClear}>Clear All</button>
        </div>
    );
};