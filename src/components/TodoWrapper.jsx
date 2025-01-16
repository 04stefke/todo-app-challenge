import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const TodoWrapper = () => {
	return (
		<div className="flex flex-col gap-5">
			<Form />
			<TodoList />
		</div>
	);
};

export default TodoWrapper;
