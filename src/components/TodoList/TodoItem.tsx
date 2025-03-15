import React from 'react';
import {TodoProps} from "./types";

const TodoItem: React.FC<TodoProps> = ({todo, toggleComplete, deleteTodo}) => {

    return (
        <div className='flex items-center justify-between bg-gray-100 p-2 rounded mb-2'>
            <span
                onClick={() => toggleComplete(todo.id)}
                className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
            >{todo.text}</span>
            <button
                onClick={() => deleteTodo(todo.id)}
                className='text-red-500 hover:text-red-700'> X
            </button>
        </div>
    );
};

export default TodoItem;