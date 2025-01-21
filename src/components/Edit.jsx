import React from "react";

const Edit = () => {
	return (
		<div className="px-4 py-3 flex items-center justify-between text-sm text-darkerFC ">
			<p className="text-xs hidden sm:block">item count</p>
			<div className="flex items-center gap-10 ">
				<div className="hidden sm:flex gap-2 items-center">
					<button className="hover:text-brightBlue">All</button>
					<button className="hover:text-brightBlue">Active</button>
					<button className="hover:text-brightBlue">Completed</button>
				</div>
				<button className="hover:text-brightBlue active-btn ">Clear Completed</button>
			</div>
		</div>
	);
};

export default Edit;
