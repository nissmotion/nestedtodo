import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth, todos }) {
    const [values, setValues] = useState({
        //here is where you set default values
        // description: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/todos', values)

        values.description = '';
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

                        <form onSubmit={handleSubmit} className='my-10 px-4'>
                            <label htmlFor="description">Task Description:</label>
                            {<input id="description" value={values.description} onChange={handleChange} />}
                            <button type="submit">Submit</button>

                            {/* <InputLabel htmlFor="description">Task Description</InputLabel>

                            <TextInput
                                id="description"
                                value={values.description} onChange={handleChange}
                                placeholder="What you gonna do?" />

                            <PrimaryButton type="submit" className='ml-4'>Submit</PrimaryButton> */}
                        </form>


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
