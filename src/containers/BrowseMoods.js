import React, { Component } from "react";

export default class BrowseMoods extends Component {
	
	componentDidMount() {
		fetch('http://localhost:3000/moods')
		.then(res => res.json())
		.then(moods => console.log(moods))
	}
	
	render() {
		return (
			<div>
				BrowseMoods Component
			</div>
		)
	}
}
