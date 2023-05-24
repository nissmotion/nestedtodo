import { useState, useRef, useEffect } from "react";
import TextInput from "../TextInput";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import useTodosContext from "@/Hooks/use-todos-context";

const TodoEdit = ({ todo, onEdit, showEdit }) => {
    const [description, setDescription] = useState(todo.description);
    const { editTodoById } = useTodosContext();
    const inputRef = useRef(null);

    useEffect(() => {
        if (showEdit && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [showEdit])

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onEdit();
        editTodoById(todo.id, description);
    }

    const handleCancel = () => {
        onEdit();
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
