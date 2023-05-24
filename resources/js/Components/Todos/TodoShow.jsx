import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import Checkbox from "../Checkbox";
import InputLabel from "../InputLabel";
import TodoEdit from "./TodoEdit";
import useTodosContext from "@/Hooks/use-todos-context";

const TodoShow = ({ todo }) => {
    const [showEdit, setShowEdit] = useState(false);
    const { toggleTodoCompletionById, deleteTodoById } = useTodosContext();

    const handleCompletionChange = () => {
        toggleTodoCompletionById(todo.id, todo.complete);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
        deleteTodoById(todo.id);
    }

    return (
        <li className={`flex items-center ${!showEdit ? "-ml-2" : "pr-2"} pl-2 py-1 hover:bg-gray-100 group rounded-md`}>

            {!showEdit ? (
                <>
                    <Checkbox
                        id={`todo-${todo.id}`}
                        checked={todo.complete}
                        className="mr-4 cursor-pointer"
                        onChange={handleCompletionChange}
                    />
                    <InputLabel
                        htmlFor={`todo-${todo.id}`}
                        className={`cursor-pointer text-lg grow ${todo.complete ? "line-through" : ""}`}
                        onClick={handleEditClick}
                    >
                        <span>{todo.description}</span>
                    </InputLabel>

                    <button
                        className="ml-auto mr-2 invisible group-hover:visible"
                        onClick={handleDeleteClick}
                    >
                        <FaTrashAlt />
                    </button>
                </>
            ) : (
                <TodoEdit
                    todo={todo}
                    onEdit={handleEditClick}
                    showEdit={showEdit}
                />
            )}

        </li>
    )
}

export default TodoShow;
