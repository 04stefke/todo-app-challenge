import { useEffect, useState } from "react";
import TodoWrapper from "./components/TodoWrapper";
function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.documentElement.className = theme;
	}, [theme]);
	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	}; 
	return (
		<section className="h-screen  bg-bg font-josefin">
			<main className="bg-dark-image h-1/3  flex flex-col items-center  ">
				<div className="w-1/4 flex flex-col gap-10 relative top-[100px]">
					<div className="flex items-center justify-between w-full">
						<h1 className="text-fontColor font-bold text-4xl">T O D O</h1>
						<i
							className={`bx ${
								theme === "dark" ? "bx-moon" : "bx-sun"
							} text-fontColor text-xl cursor-pointer`
						} onClick={toggleTheme}
						></i>
					</div>
					<TodoWrapper />
				</div>
			</main>
		</section>
	);
}

export default App;
