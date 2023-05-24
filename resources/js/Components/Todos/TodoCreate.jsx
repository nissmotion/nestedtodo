import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { useState } from "react";
import useTodosContext from '@/Hooks/use-todos-context';

const TodoCreate = () => {
    const [description, setDescription] = useState('');
    const { createTodo } = useTodosContext();

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(description);
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} className="mb-2 w-full">
            <InputLabel htmlFor="description" className="text-sm">Task Description</InputLabel>
            <div className="flex">
                <TextInput
                    className="grow"
                    id="description"
                    value={description}
                    onChange={handleChange}
                    placeholder="What you gonna do?"
                />
                <PrimaryButton type="submit" className="ml-4">Submit</PrimaryButton>
            </div>
        </form>
    )
}

export default TodoCreate;
