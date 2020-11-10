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
				{/* <h1>Hello, world!</h1> */}
				<h2>It is 
					<div className="time">{this.state.date.toLocaleTimeString()}</div>
				</h2>
			</div>
		);
	}
}
