import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TodoCreate from '@/Components/Todos/TodoCreate';
import TodoList from '@/Components/Todos/TodoList';
import { TodosProvider } from '@/Context/todos';

export default function Dashboard({ auth, todos }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="max-w-7xl mx-auto mt-12 sm:px-6 lg:px-8">
                <div className="w-2/3 mx-auto p-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <TodosProvider initialTodos={todos} >
                        <TodoCreate />
                        <TodoList />
                    </TodosProvider>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
