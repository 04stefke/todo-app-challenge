import TodoWrapper from "./components/TodoWrapper";
function App() {
	return (
		<section className="h-screen  bg-dark-backgroundColor  ">
			<main className="bg-dark-image h-1/3  flex flex-col items-center  ">
				<div className="w-1/4 flex flex-col gap-10 relative top-[100px]">
					<div className="flex items-center justify-between w-full">
						<h1 className="text-white font-bold text-4xl">T O D O</h1>
						<i className="bx bx-sun text-white text-xl cursor-pointer"></i>
					</div>
					<TodoWrapper/>
				</div>
			</main>
		</section>
	);
}

export default App;
