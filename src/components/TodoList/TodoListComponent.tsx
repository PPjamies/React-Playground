import React, {useState} from 'react';
import {Todo} from "./types";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoListComponent = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        let todo: Todo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos([...todos, todo]);
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const toggleComplete = (id: number) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));
    };

    return (
        <div className='max-w-md mx-auto mt-10 p-4 border rounded shadow'>
            <h1 className='text-2l font-bold mb-4'>TODO Component</h1>
            <TodoInput addTodo={addTodo}/>
            <TodoList
                todos={todos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
            />
        </div>
    );
};

export default TodoListComponent;