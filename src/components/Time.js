import React, { Component } from "react";

export default class Time extends Component {
	state = { date: new Date() };

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {

		return (
			<div>
				<h2>
					<div className="time">{this.state.date.toLocaleTimeString()}</div>
				</h2>
			</div>
		);
	}
}
