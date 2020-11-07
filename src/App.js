import "./App.css";
import Home from "./Home";
import Entry from "./Entry";
import BrowseMoods from "./BrowseMoods";
import Visualizer from "./Visualizer";
// import Merchandise from "./Merchandise";

function App() {
	return (
		<div className="App">
			<Home />
			<Entry />
			<BrowseMoods />
			{/* <Merchandise /> */}
			<Visualizer />
		</div>
	);
}

export default App;
