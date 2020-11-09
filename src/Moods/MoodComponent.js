import React, { Component } from "react";
import MoodDisplay from './MoodDisplay'

export default class BrowseMoods extends Component {
	
	componentDidMount() {
		fetch('http://localhost:3000/moods')
		.then(res => res.json())
		.then(moods => this.setState({moods}))
	}

	state = {
		moods: []
	}
	
	render() {
		const {moods} = this.state

		return (
			<div>
				<MoodDisplay moods={moods}/>
			</div>
		)
	}
}
