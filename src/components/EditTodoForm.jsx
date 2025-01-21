import React, { useState } from "react";
const EditTodoForm = ({editTodo, task}) => {
	const [todo, setTodo] = useState(task.task)
	const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(todo, task.id)
        setTodo('')
    }
	return (
		<form className="px-4 py-5 border-b border-borderB  text-lightGray  flex items-center justify-between  gap-3 w-full" onSubmit={handleSubmit}>
			<div className="w-full bg-transparent flex items-center px-2 ">
				<input
					type="text"
					className="w-full  outline-none bg-transparent text-lightGray "
					placeholder="Update Task"
					onChange={(e) => setTodo(e.target.value)}
					value={todo}
				/>
				<button
					type="submit  "
					className=" rounded-full w-7 h-7 border-[1px] border-borderB hover:border-brightBlue flex items-center justify-center"
				>
					<i className='bx bx-check text-bg2 text-lg hover:text-brightBlue' ></i>
				</button>
			</div>
		</form>
	);
};

export default EditTodoForm;
