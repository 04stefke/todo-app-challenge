import { useEffect, useState } from "react";
import TodoWrapper from "./components/TodoWrapper";
function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	useEffect(() => {
		document.body.classList.remove("light", "dark");
		document.body.classList.add(theme);
		localStorage.setItem("theme", theme); // Store the current theme in localStorage
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};
	
	return (
		<section className="h-screen  bg-bg font-josefin">
			<main className="bg-dark-image h-[300px]  flex flex-col items-center  ">
				<div className="xl:w-1/3 sm:min-w-[500px]  min-w-[250px] flex flex-col gap-10 relative top-[100px]">
					<div className="flex items-center justify-between w-full">
						<h1 className="text-fontColor font-bold text-4xl">T O D O</h1>
						<i
							className={`bx ${
								theme === "dark" ? "bx-sun" : "bx-moon"
							} text-fontColor text-3xl cursor-pointer`}
							onClick={toggleTheme}
						></i>
					</div>
					<TodoWrapper />
				</div>
			</main>
		</section>
	);
}

export default App;
