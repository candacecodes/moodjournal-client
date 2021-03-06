import React from "react";
import "./App.css";
import "./Sidebar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./containers/Sidebar";
import EntriesDisplay from "./Entry/EntriesDisplay";
import Home from "./containers/Home";
// import Search from "./Mood/SearchMoods";
import MoodComponent from "./Mood/MoodComponent";
// import Merchandise from "./components/Merchandise";
import Visualizer from "./Visualizer";

const App = (props) => {
	const url = "https://source.unsplash.com/featured/?rock,tree,nature,water";

	return (
		<Router>
			<div className="App" id="outer-container">
				<img src={url} className="bg" alt="nature-background" />
				<Sidebar
					pageWrapId={"page-wrap"}
					outerContainerId={"outer-container"}
				/>
				<main id="page-wrap">
					<Route exact path="/" component={Home} />
					<Route exact path="/mood-entries" component={EntriesDisplay} />
					{/* <Route exact path="/search" component={Search} /> */}
					<Route exact path="/browse-moods" component={MoodComponent} />
					{/* <Route exact path="/merchandise" component={Merchandise} /> */}
					<Route exact path="/visualizer" component={Visualizer} />
				</main>
			</div>
		</Router>
	);
};

export default App;
