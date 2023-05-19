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
        <div>
            <form onSubmit={handleSubmit} className="my-10 px-4">
                <InputLabel htmlFor="description">Task Description</InputLabel>
                <TextInput
                    id="description"
                    value={description}
                    onChange={handleChange}
                    placeholder="What you gonna do?"
                />
                <PrimaryButton type="submit" className="ml-4">Submit</PrimaryButton>
            </form>
        </div>
    )
}

export default TodoCreate;