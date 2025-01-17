import React from "react";
import tick from "../../public/assets/icon-check.svg";
import cross from "../../public/assets/icon-cross.svg";
const Todo = () => {
	return (
		<div className="px-4 py-4 border-b border-gray-500 text-lightGray  flex items-center justify-between  gap-3 w-full">
			<div className="flex items-center gap-3">
				<div className=" hover:border-light-gradient-color border rounded-full px-1 py-[5px] bg-gradient-checklist">
					<img src={tick} alt="" className="cursor-pointer" />
				</div>
				<p className="cursor-pointer">tasks to do</p>
			</div>
			<img src={cross} alt="" className="justify-self-end cursor-pointer" />
		</div>
	);
};

export default Todo;
