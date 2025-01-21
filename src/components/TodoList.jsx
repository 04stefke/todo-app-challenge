import React from "react";
import Todo from "./Todo";
import Edit from "./Edit";
const TodoList = ({todos}) => {
	return (
		<div className="bg-bg2 rounded-md flex flex-col shadow-2xl min-h-[300px] ">
			<div className="h-full w-full ">
				{todos.map((todo, index) => (
					<Todo task={todo} key={index} />
				))}
				
			</div>
			<Edit />
		</div>
	);
};

export default TodoList;
