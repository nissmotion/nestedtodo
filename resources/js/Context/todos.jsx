import { createContext, useState } from 'react';
import axios from 'axios';

const TodosContext = createContext();

const Provider = ({ children, initialTodos }) => {
    const [todoItems, setTodoItems] = useState(initialTodos);

    const createTodo = async (description) => {
        const response = await axios.post('/todos',
            { description, complete: 0 }
        );

        // TODO: check response status code and handle potential errors

        const updatedTodoItems = [
            ...todoItems,
            response.data
        ];

        setTodoItems(updatedTodoItems);
    }

    const toggleTodoCompletionById = async (id, isComplete) => {
        const complete = Number(!isComplete);
        const response = await axios.put(`/todos/${id}`, { complete })

        const updatedTodoItems = todoItems.map((todoItem) => {
            if (todoItem.id === id) {
                return { ...todoItem, complete: response.data.complete };
            }

            return todoItem;
        })

        setTodoItems(updatedTodoItems);
    }

    const deleteTodoItemById = async (id) => {
        await axios.delete(`/todos/${id}`);

        const updatedTodoItems = todoItems.filter((todoItem) => {
            return todoItem.id !== id;
        })

        setTodoItems(updatedTodoItems);
    }

    const editTodoItemById = async (id, description) => {
        const response = await axios.put(`/todos/${id}`, { description });

        const updatedTodoItems = todoItems.map((todoItem) => {
            if (todoItem.id === id) {
                return { ...todoItem, description: response.data.description }
            }

            return todoItem;
        })

        setTodoItems(updatedTodoItems);
    }

    return (
        <TodosContext.Provider value={{
            todos,
            createTodo,
            toggleTodoCompletionById,
            deleteTodoItemById,
            editTodoItemById
        }}>
            {children}
        </TodosContext.Provider>
    )
}

export { Provider };
export default TodosContext;
