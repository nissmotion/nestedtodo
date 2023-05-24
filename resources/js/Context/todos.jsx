import { createContext, useState } from 'react';
import axios from 'axios';

const TodosContext = createContext();

const TodosProvider = ({ children, initialTodos }) => {
    const [todos, setTodos] = useState(initialTodos);

    const createTodo = async (description) => {
        const response = await axios.post('/todos',
            { description, complete: 0 }
        );

        // TODO: check response status code and handle potential errors

        const updatedTodos = [
            ...todos,
            response.data
        ];

        setTodos(updatedTodos);
    }

    const toggleTodoCompletionById = async (id, isComplete) => {
        const complete = Number(!isComplete);
        const response = await axios.put(`/todos/${id}`, { complete })

        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, complete: response.data.complete };
            }

            return todo;
        })

        setTodos(updatedTodos);
    }

    const deleteTodoById = async (id) => {
        await axios.delete(`/todos/${id}`);

        const updatedTodos = todos.filter((todo) => {
            return todo.id !== id;
        })

        setTodos(updatedTodos);
    }

    const editTodoById = async (id, description) => {
        const response = await axios.put(`/todos/${id}`, { description });

        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, description: response.data.description }
            }

            return todo;
        })

        setTodos(updatedTodos);
    }

    return (
        <TodosContext.Provider value={{
            todos,
            createTodo,
            toggleTodoCompletionById,
            deleteTodoById,
            editTodoById
        }}>
            {children}
        </TodosContext.Provider>
    )
}

export { TodosProvider };
export default TodosContext;
