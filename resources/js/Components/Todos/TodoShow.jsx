import Checkbox from "../Checkbox";
import InputLabel from "../InputLabel";
import { useEffect } from "react";

const TodoShow = ({ todoItem, onComplete }) => {
    const handleCompletionChange = () => {
        onComplete(todoItem.id, todoItem.complete);
    }

    return (
        <li className="flex items-center mb-2">
            <Checkbox
                id={`todo-${todoItem.id}`}
                checked={todoItem.complete}
                className="mr-4"
                onChange={handleCompletionChange}
            />
            <InputLabel
                htmlFor={`todo-${todoItem.id}`}
                className={`text-lg ${todoItem.complete ? "line-through" : ""}`}
            >
                <span>{todoItem.description}</span>
            </InputLabel>
        </li>
    )
}

export default TodoShow;
