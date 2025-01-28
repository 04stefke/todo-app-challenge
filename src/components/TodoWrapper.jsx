import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/Firebase";
const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");

	// reads todos
	useEffect(() => {
		const q = query(collection(db, "todos"), orderBy("createdAt", "desc"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let todosArray = [];
			querySnapshot.forEach((doc) => {
				todosArray.push({ ...doc.data(), id: doc.id });
			});
			setTodos(todosArray);
		});
		return () => unsubscribe();
	}, []);

	// Creates and adds todos to the store
	const addTodo = async (todo) => {
		if (todo.trim() === "") {
			alert("Enter a task!");
			return;
		}

		await addDoc(collection(db, "todos"), {
			task: todo,
			completed: false,
			createdAt: serverTimestamp(),
		});
	};

	// UPDATE FUNCTIONS
	// toggles completed state for selected tasks
	const toggleCompleted = async (todo) => {
		await updateDoc(doc(db, "todos", todo.id), {
			completed: !todo.completed,
		});
	};

	// deletes todos selected
	const deleteTodo = async (id) => {
		await deleteDoc(doc(db, "todos", id));
	};

	// function that changes the status of isEditing for todos
	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};

	// function for editing the task
	const editTask = async (task, id) => {
		if (task.trim() === "") {
			alert("Please enter the new task!");
			return;
		}
		if (task === todos.find((todo) => todo.id === id).originalTask) {
			// If the task hasn't been changed, do nothing and exit
			setTodos(
				todos.map((todo) =>
					todo.id === id ? { ...todo, isEditing: false } : todo
				)
			);
			return;
		}
		await updateDoc(doc(db, "todos", id), {
			task,
		});
		// After the task is updated, set editing to false
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: false } : todo
			)
		);
	};

	// function to delete all completed tasks
	const deleteAllCompletedTodos = () => {
		todos.forEach(async (todo) => {
			if (todo.completed) await deleteDoc(doc(db, "todos", todo.id));
		});
	};

	// returns the number of todos
	const getTotalTasks = () => {
		return todos.length;
	};

	// changes the shown tasks
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
		</div>
	);
};

export default TodoWrapper;
