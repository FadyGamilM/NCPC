import Hero from "./components/Hero";
import Header from "./components/Header";
import Info from "./components/Info";
import Sectors from "./components/Sectors";
function App() {
	return (
		<div className="container mx-auto px-4 pt-4 gap-y-8 flex flex-col">
			<Header />
			<Hero />
			<Info />
			<Sectors />
		</div>
	);
}

export default App;
