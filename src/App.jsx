import Form from "./components/Form";
function App() {
	return (
		<section className="h-screen flex flex-col bg-dark-backgroundColor ">
			<main className="bg-dark-image h-1/3 flex flex-col items-center justify-center ">
				<div className="w-1/4 flex flex-col gap-14">
					<div className="flex items-center justify-between w-full">
						<h1 className="text-white font-bold text-4xl">T O D O</h1>
						<i className="bx bx-sun text-white text-xl cursor-pointer"></i>
					</div>
					<Form />
				</div>
			</main>
		</section>
	);
}

export default App;
