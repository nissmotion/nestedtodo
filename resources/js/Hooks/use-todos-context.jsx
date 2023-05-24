import { useContext } from 'react';
import TodosContext from '@/Context/todos';

const useTodosContext = () => {
    return useContext(TodosContext);
}

export default useTodosContext;
