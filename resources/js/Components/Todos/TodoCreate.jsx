import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { useState } from "react";

const TodoCreate = ({ onCreate }) => {
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(description);
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} className="mb-10">
            <InputLabel htmlFor="description" className="text-sm">Task Description</InputLabel>
            <div className="flex">
                <TextInput
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
