import React from "react";
import Todo from "./Todo";
import Edit from "./Edit";
import EditTodoForm from "./EditTodoForm";
const TodoList = ({ todos, toggleCompleted, deleteTodo, editTodo, editTask }) => {
	return (
		<div className="bg-bg2 rounded-md flex flex-col shadow-2xl min-h-[300px] max-h-[500px] sm:max-h-[0]">
			<div className="h-full w-full overflow-scroll sm:overflow-hidden">
				{todos.map((todo, index) =>
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
			<Edit />
		</div>
	);
};

export default TodoList;
