import TodoShow from "./TodoShow";

const TodoList = ({ todoItems, onComplete, onDelete, onEdit }) => {
    const renderedTodoItems = todoItems.map((todoItem) => {
        return (
            <TodoShow
                key={todoItem.id}
                todoItem={todoItem}
                onComplete={onComplete}
                onDelete={onDelete}
                onEdit={onEdit}
            />
        );
    })

    return <ul className="mt-6">{renderedTodoItems}</ul>;
}

export default TodoList;
