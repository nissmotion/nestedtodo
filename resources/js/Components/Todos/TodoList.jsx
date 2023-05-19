import TodoShow from "./TodoShow";

const TodoList = ({ todoItems, onComplete }) => {
    const renderedTodoItems = todoItems.map((todoItem) => {
        return (
            <TodoShow
                key={todoItem.id}
                todoItem={todoItem}
                onComplete={onComplete}
            />
        );
    })

    return <ul>{renderedTodoItems}</ul>;
}

export default TodoList;
