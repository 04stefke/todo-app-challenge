import React from "react";
import Todo from "./Todo";
import Edit from "./Edit";
import EditTodoForm from "./EditTodoForm";
const TodoList = ({
	filteredTodos,
	toggleCompleted,
	deleteTodo,
	editTodo,
	editTask,
	deleteAllCompletedTodos,
	getTotalTasks,
	filter,
	handleFilterChange
}) => {
	return (
		<div className="bg-bg2 rounded-md flex flex-col shadow-2xl min-h-[350px] max-h-[400px] sm:max-h-0">
			<div className="h-full w-full overflow-auto scrollbar-thin  scrollbar-thumb-darkerFC scrollbar-track-transparent ">
				{filteredTodos().map((todo, index) =>
					todo.isEditing ? (
						<EditTodoForm editTodo={editTask} task={todo} key={index} />
					) : (
						<Todo
							task={todo}
							key={index}
							toggleCompleted={toggleCompleted}
							deleteTodo={deleteTodo}
							editTodo={editTodo}
							
						/>
					)
				)}
			</div>
			<Edit deleteAllCompletedTodos={deleteAllCompletedTodos} getTotalTasks={getTotalTasks} filter={filter} handleFilterChange={handleFilterChange}/>
		</div>
	);
};

export default TodoList;
