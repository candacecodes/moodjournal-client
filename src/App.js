import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from "./containers/Sidebar";
import EntriesDisplay from "./Entry/EntriesDisplay";
import Home from "./containers/Home";
import Search from "./Mood/SearchMoods";
import BrowseMoods from "./Mood/MoodComponent";
// import Merchandise from "./Merchandise";
// import Visualizer from "./Visualizer";

const App = (props) => {
	return (
		<Router>
			<div className="App">
				{/* <Home /> */}
				<Sidebar />
				{/* <EntryComponent /> */}
				<Route exact path="/home" component={Home} />
				<Route exact path="/mood-entries" component={EntriesDisplay} />
				<Route exact path="/search" component={Search} />
				<Route exact path="/browse-moods" component={BrowseMoods} />
				{/* <Route exact path="/merchandise" component={Merchandise} /> */}
				{/* <Route exact path="/visualizer" component={Visualizer} /> */}
			</div>
		</Router>
	);
};

export default App;
