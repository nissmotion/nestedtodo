import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import Checkbox from "../Checkbox";
import InputLabel from "../InputLabel";
import TodoEdit from "./TodoEdit";

const TodoShow = ({ todoItem, onComplete, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleCompletionChange = () => {
        onComplete(todoItem.id, todoItem.complete);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
        onDelete(todoItem.id);
    }

    return (
        <li className={`flex items-center ${!showEdit ? "-ml-2" : "pr-2"} pl-2 py-1 hover:bg-gray-100 group rounded-md`}>

            {!showEdit ? (
                <>
                    <Checkbox
                        id={`todo-${todoItem.id}`}
                        checked={todoItem.complete}
                        className="mr-4 cursor-pointer"
                        onChange={handleCompletionChange}
                    />
                    <InputLabel
                        htmlFor={`todo-${todoItem.id}`}
                        className={`cursor-pointer text-lg grow ${todoItem.complete ? "line-through" : ""}`}
                        onClick={handleEditClick}
                    >
                        <span>{todoItem.description}</span>
                    </InputLabel>

                    <button
                        className="ml-auto mr-2 invisible group-hover:visible"
                        onClick={handleDeleteClick}
                    >
                        <FaTrashAlt />
                    </button>
                </>
            ) : (
                <TodoEdit todoItem={todoItem} onEdit={onEdit} setShowEdit={setShowEdit} />
            )}

        </li>
    )
}

export default TodoShow;
