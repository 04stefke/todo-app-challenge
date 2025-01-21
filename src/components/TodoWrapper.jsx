import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
uuidv4();
const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		setTodos([
			...todos,
			{ id: uuidv4(), task: todo, completed: false, isEditing: false },
		]);
		console.log(todos);
	};
	const toggleCompleted = (id) => {
		setTodos(
            todos.map((todo) =>
                todo.id === id? {...todo, completed:!todo.completed } : todo
            )
        );
        console.log(todos);
	}
	return (
		<div className="flex flex-col gap-5">
			<Form addTodo={addTodo} />
			<TodoList todos={todos} toggleCompleted={toggleCompleted} />
		</div>
	);
};

export default TodoWrapper;
