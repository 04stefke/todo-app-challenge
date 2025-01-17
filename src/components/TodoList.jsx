import React from "react";
import Todo from "./Todo";
import Edit from "./Edit";
const TodoList = () => {
	return (
		<div className="bg-bg2 rounded-md flex flex-col shadow-2xl min-h-[200px] ">
			<Todo />

			<div className="h-full w-full ">
				<Edit />
			</div>
		</div>
	);
};

export default TodoList;
