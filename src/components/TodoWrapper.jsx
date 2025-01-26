import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	query,
	updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/Firebase";
uuidv4();
const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");

	// create todos
	// read todos
	useEffect(() => {
		const q = query(collection(db, "todos"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let todosArray = [];
			querySnapshot.forEach((doc) => {
				todosArray.push({ ...doc.data(), id: doc.id });
			});
			setTodos(todosArray);
		});
		return () => unsubscribe();
	}, []);

	// delete todos
	const addTodo = async (todo) => {
		if (todo.trim() === "") return;

		await addDoc(collection(db, "todos"), {
			task: todo,
			completed: false,
			isEditing: false,
		});
	};

	// update todos
	const toggleCompleted = async (todo) => {
		await updateDoc(doc(db, "todos", todo.id), {
			completed: !todo.completed,
		});
	};
	const deleteTodo = async(id) => {
		await deleteDoc(doc(db, "todos", id));
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

	const deleteAllCompletedTodos = () => {
		const activeTodos = todos.filter((todo) => !todo.completed);
		setTodos(activeTodos);
	};

	const getTotalTasks = () => {
		return todos.length;
	};

	const filteredTodos = () => {
		if (filter === "active") {
			return todos.filter((todo) => !todo.completed);
		} else if (filter === "completed") {
			return todos.filter((todo) => todo.completed);
		} else {
			return todos;
		}
	};

	const handleFilterChange = (newFilter) => {
		setFilter(newFilter);
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
				deleteAllCompletedTodos={deleteAllCompletedTodos}
				getTotalTasks={getTotalTasks}
				handleFilterChange={handleFilterChange}
				filteredTodos={filteredTodos}
				filter={filter}
				setTodos={setTodos}
			/>
			<p className="self-center mt-20 cursor-default text-darkerFC">
				Drag and drop to reorder list
			</p>
		</div>
	);
};

export default TodoWrapper;
