import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

export const Todo_items = ({ items, onDelete }) => {
    return (
        <>
            {items.map((item, index) => (
                <li key={index} className="todo-item">
                    <h3 className="todo-text">{item}</h3>
                    <button className="todo-button"><TiTick /></button>
                    <button className="todo-delete" onClick={() => onDelete(item)}><MdDelete /></button>
                </li>
            ))}
        </>
    );
};