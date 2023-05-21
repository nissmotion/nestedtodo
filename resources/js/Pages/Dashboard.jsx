import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TodoCreate from '@/Components/Todos/TodoCreate';
import TodoList from '@/Components/Todos/TodoList';
import axios from 'axios';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth, todos }) {
    const [todoItems, setTodoItems] = useState(todos);

    const handleCreateTodo = async (description) => {
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
        console.log(response.data);
        setTodoItems(updatedTodoItems);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="max-w-7xl mx-auto mt-12 sm:px-6 lg:px-8">
                <div className="p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <TodoCreate onCreate={handleCreateTodo} />
                    <TodoList todoItems={todoItems} onComplete={toggleTodoCompletionById} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
