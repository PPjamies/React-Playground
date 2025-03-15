import React, {useState} from 'react';
import {TodoInputProps} from './types'

const TodoInput: React.FC<TodoInputProps> = ({addTodo}) => {
    const [input, setInput] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Add a task ...'
                className='border p-2 rounded w-full'
            />
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
                Add
            </button>
        </form>
    );
};

export default TodoInput;