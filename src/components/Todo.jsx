import React from "react";
const Todo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {
	return (
		<div className="px-4 py-4 border-b border-borderB  text-lightGray  flex items-center justify-between  gap-3 w-full">
			<div className="flex items-center gap-3">
				<div
					className={`cursor-pointer h-8 w-8 rounded-full border-[1px] border-borderB hover:border-brightBlue flex items-center justify-center ${
						task.completed ? "completedTaskTick" : ""
					}`}
				>
					<i className="bx bx-check text-bg2 text-lg  hover:text-brightBlue" onClick={() => toggleCompleted(task)}></i>
				</div>
				<p
					className={`cursor-pointer ${task.completed ? "completedTask" : ""}`}
					onClick={() => editTodo(task.id)}
				>
					{task.task}
				</p>
			</div>
			<i alt="delete todo" className="bx bx-x justify-self-end text-darkerFC cursor-pointer hover:text-brightBlue text-2xl" onClick={() => deleteTodo(task.id)} />
		</div>
	);
};

export default Todo;
