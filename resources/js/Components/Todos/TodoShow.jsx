import Checkbox from "../Checkbox";
import InputLabel from "../InputLabel";

const TodoShow = ({ todoItem, onComplete }) => {
    const handleCompletionClick = () => {
        const isComplete = todoItem.complete === 1;
        onComplete(todoItem.id, isComplete);
    }

    return (
        <li className="flex items-center mb-1">
            <Checkbox
                id={`todo-${todoItem.id}`}
                className="mr-2"
                onClick={handleCompletionClick}
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
