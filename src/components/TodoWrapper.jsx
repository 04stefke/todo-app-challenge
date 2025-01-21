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
	};
	const toggleCompleted = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};
	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	const editTodo = (id) => {
		setTodos(
            todos.map((todo) =>
                todo.id === id? {...todo, isEditing: !todo.isEditing } : todo
            )
        );
	}
	return (
		<div className="flex flex-col gap-5">
			<Form addTodo={addTodo} />
			<TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo} />
		</div>
	);
};

export default TodoWrapper;
