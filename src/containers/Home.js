import React, { Component } from "react";

import Sidebar from "./Sidebar";
import Quotes from "../components/Quotes";
import Time from "../components/Time";

export default class Home extends Component {
	render() {
		var sectionStyle = {
			backgroundPosition: "center",
			// backgroundSize: "cover",
			// backgroundRepeat: "no-repeat",
			width: "100%",
			height: "700px",
			backgroundImage: `url(${"https://source.unsplash.com/random"})`,
		};

		return (
			<div style={null}>
				<Sidebar />
				<Quotes />
				<Time />
			</div>
		);
	}
}
