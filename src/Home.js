import React, { Component } from "react";
import Quotes from "./Quotes";
import Time from "./Time";

export default class Home extends Component {
	render() {
		return (
			<div>
				Home Component
				<Quotes />
				<Time />
			</div>
		);
	}
}
