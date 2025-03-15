import React from 'react';
import {Todo, TodoListProps} from "./types";
import TodoItem from "./TodoItem";

const TodoList: React.FC<TodoListProps> = ({todos, toggleComplete, deleteTodo}) => {

    return (
        <div>
            {todos.map((todo: Todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;