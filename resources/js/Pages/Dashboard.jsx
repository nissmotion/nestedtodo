import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TodoCreate from '@/Components/Todos/TodoCreate';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth, todos }) {
    const [todoItems, setTodoItems] = useState(todos);

    const handleCreateTodo = (description) => {
        const response = router.post('/todos', { description });

        console.log(response);
        // TODO: get a response from the post action that contains the todo object
        // and then add that todo object into the todoItems state
        //
        // const updatedTodoItems = [
        //     ...todoItems,
        //     response.data
        // ];
        // setTodoItems(updatedTodoItems);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <TodoCreate onCreate={handleCreateTodo} />

                        <table>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Complete</th>
                                </tr>
                            </thead>

                            <tbody>
                                {todos.map((todo, index) => (
                                    <tr key={index}>
                                        <td>{todo.description}</td>
                                        <td>{todo.complete}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
