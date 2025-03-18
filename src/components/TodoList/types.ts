export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoProps {
    todo: Todo;
    toggleComplete: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export interface TodoListProps {
    todos: Todo[];
    toggleComplete: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export interface TodoInputProps {
    addTodo: (text: string) => void;
}

