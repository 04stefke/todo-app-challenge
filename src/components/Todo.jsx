import React from "react";
import cross from "../../public/assets/icon-cross.svg";
const Todo = ({ task, toggleCompleted, deleteTodo }) => {
	return (
		<div className="px-4 py-4 border-b border-borderB  text-lightGray  flex items-center justify-between  gap-3 w-full">
			<div className="flex items-center gap-3">
				<div
					className={`cursor-pointer h-8 w-8 rounded-full border-[1px] border-borderB hover:border-brightBlue flex items-center justify-center ${
						task.completed ? "completedTaskTick" : ""
					}`}
				>
					<i className="bx bx-check text-bg2 text-lg px-2 py-3" onClick={() => toggleCompleted(task.id)}></i>
				</div>
				<p
					className={`cursor-pointer ${task.completed ? "completedTask" : ""}`}
					
				>
					{task.task}
				</p>
			</div>
			<img src={cross} alt="" className="justify-self-end cursor-pointer" onClick={() => deleteTodo(task.id)} />
		</div>
	);
};

export default Todo;
