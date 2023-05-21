import { useState, useRef, useEffect } from "react";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const TodoEdit = ({ todoItem, onEdit, showEdit, setShowEdit }) => {
    const [description, setDescription] = useState(todoItem.description);
    const inputRef = useRef(null);

    useEffect(() => {
        if (showEdit && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [showEdit])

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
                ref={inputRef}
            />
            <div>
                <PrimaryButton className="mr-2">Fix It</PrimaryButton>
                <SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
            </div>
        </form>
    )
}

export default TodoEdit;
