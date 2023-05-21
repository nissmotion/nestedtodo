import Checkbox from "../Checkbox";
import InputLabel from "../InputLabel";
import { FaTrashAlt } from 'react-icons/fa';

const TodoShow = ({ todoItem, onComplete, onDelete }) => {
    const handleCompletionChange = () => {
        onComplete(todoItem.id, todoItem.complete);
    }

    const handleDeleteClick = () => {
        onDelete(todoItem.id);
    }

    return (
        <li className="flex items-center -ml-2 pl-2 py-1 hover:bg-gray-100 group rounded-md">
            <Checkbox
                id={`todo-${todoItem.id}`}
                checked={todoItem.complete}
                className="mr-4"
                onChange={handleCompletionChange}
            />
            <InputLabel
                htmlFor={`todo-${todoItem.id}`}
                className={`todo-text text-lg grow ${todoItem.complete ? "line-through" : ""}`}
            >
                <span>{todoItem.description}</span>
            </InputLabel>
            <button
                className="ml-auto mr-2 invisible group-hover:visible"
                onClick={handleDeleteClick}
            >
                <FaTrashAlt />
            </button>
        </li>
    )
}

export default TodoShow;
