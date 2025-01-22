import React, { useState } from "react";
import check from "/assets/icon-check.svg";
const Form = ({addTodo}) => {
	const [todo, setTodo] = useState('')
	const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo)
        setTodo('')
    }
	return (
		<form className="shadow-2xl w-full flex items-center  bg-bg2 rounded-md" onSubmit={handleSubmit}>
			<div className="w-full bg-transparent flex items-center px-2 ">
				<input
					type="text"
					className="w-full py-4 px-4 outline-none bg-transparent text-lightGray "
					placeholder="Create a new todo..."
					onChange={(e) => setTodo(e.target.value)}
					value={todo}
				/>
				<button
					type="submit  "
					className=" rounded-full w-7 h-7 border-[1px] border-borderB hover:border-brightBlue flex items-center justify-center"
				>
					<i className='bx bx-check text-bg2 text-lg  hover:text-brightBlue ' ></i>
				</button>
			</div>
		</form>
	);
};

export default Form;
