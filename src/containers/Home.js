import React, { Component } from "react";


import Sidebar from "./Sidebar"
import Quotes from "../components/Quotes";
import Time from "../components/Time";



export default class Home extends Component {
	render() {
		return (
			<div>
				<Sidebar />
				<Quotes />
				<Time />
			</div>
		);
	}
}
