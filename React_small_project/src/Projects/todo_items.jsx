import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

export const Todo_items = ({ items, onDelete, onChecked }) => {
    return (
        <>
            {items.map((item) => (
                <li key={item.id} className="todo-item">
                    <h3
                        className="todo-text"
                        style={{
                            textDecoration: item.checked ? "line-through" : "none",
                            color: item.checked ? "#fffff" : "black"
                        }}
                    >
                        {item.content}
                    </h3>
                    <button className="todo-button" onClick={() => onChecked(item)}><TiTick /></button>
                    <button className="todo-delete" onClick={() => onDelete(item)}><MdDelete /></button>
                </li>
            ))}
        </>
    );
};