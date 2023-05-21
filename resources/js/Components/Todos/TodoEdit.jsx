import { useState } from "react";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const TodoEdit = ({ todoItem, onEdit, setShowEdit }) => {
    const [description, setDescription] = useState(todoItem.description);

    const handleChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onEdit(todoItem.id, description);
        setShowEdit(false);
    }

    const handleCancel = () => {
        setShowEdit(false);
    }

    return (
        <form onSubmit={handleSubmit} className="w-full my-2">
            <TextInput
                value={description}
                onChange={handleChange}
                className="w-full mb-3"
            />
            <div>
                <PrimaryButton className="mr-2">Fix It</PrimaryButton>
                <SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
            </div>
        </form>
    )
}

export default TodoEdit;
