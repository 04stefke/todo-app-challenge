import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
uuidv4();
const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		if (todo.trim() === "") return;
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
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};
	const editTask = (task, id) => {
		if (task.trim() === "") return;
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
			)
		);
	};

	const deleteAllTodos = () => {
		setTodos([]);
	};

	const getTotalTasks = () => {
		return todos.length;
	};

	return (
		<div className="flex flex-col gap-5">
			<Form addTodo={addTodo} />
			<TodoList
				todos={todos}
				toggleCompleted={toggleCompleted}
				deleteTodo={deleteTodo}
				editTodo={editTodo}
				editTask={editTask}
				deleteAllTodos={deleteAllTodos}
				getTotalTasks={getTotalTasks}
			/>
		</div>
	);
};

export default TodoWrapper;
