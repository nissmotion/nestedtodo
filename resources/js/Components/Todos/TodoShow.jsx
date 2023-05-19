import Checkbox from "../Checkbox";
import InputLabel from "../InputLabel";

const TodoShow = ({ todoItem, onComplete }) => {
    const handleCompletionChange = () => {
        onComplete(todoItem.id, todoItem.complete);
    }

    return (
        <li className="flex items-center mb-1">
            <Checkbox
                id={`todo-${todoItem.id}`}
                checked={todoItem.complete}
                className="mr-2"
                onChange={handleCompletionChange}
            />
            <InputLabel
                htmlFor={`todo-${todoItem.id}`}
                className={todoItem.complete === 0 ? "" : "line-through"}
            >
                <span>{todoItem.description}</span>
            </InputLabel>
        </li>
    )
}

export default TodoShow;
