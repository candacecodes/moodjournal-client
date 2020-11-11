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
		// const styles = {
		// 	position: "fixed",
		// 	left: "50%",
		// 	top: "50%",
		// 	"margin-top": "-50px",
		// 	"margin-left": "-100px",
		// 	"font-size": "30px",
		// };

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
