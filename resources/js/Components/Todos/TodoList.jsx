import TodoShow from "./TodoShow";
import useTodosContext from "@/Hooks/use-todos-context";

const TodoList = () => {
    const { todos } = useTodosContext();

    const renderedTodos = todos.map((todo) => {
        return (
            <TodoShow key={todo.id} todo={todo} />
        );
    })

    return <ul className="mt-6">{renderedTodos}</ul>;
}

export default TodoList;
