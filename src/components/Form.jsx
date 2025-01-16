import React from "react";
import check from '/assets/icon-check.svg'
const Form = () => {
	return (
		<form className="w-full flex items-center  bg-dark-backgroundColor2 rounded-md">
			<div className="w-full bg-transparent flex items-center px-2 ">
				<img src={check} alt="" className="bg-gradient-checklist rounded-full px-[4px] py-[5px] cursor-pointer border-dark-veryDarkGrayishBlue2 border-1 "  />
				<input
					type="text"
					className="w-full py-4 px-4 outline-none bg-transparent text-gray-600 "
					placeholder="Create a new todo..."
				/>
			</div>
		</form>
	);
};

export default Form;
