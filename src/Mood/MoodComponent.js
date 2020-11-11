import React, { Component } from "react";
import MoodDisplay from './MoodDisplay'


export default class MoodComponent extends Component {
	
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
		let url = "https://www.verywellmind.com/an-overview-of-the-types-of-emotions-4163976#:~:text=During%20the%201970s%2C%20psychologist%20Paul,fear%2C%20surprise%2C%20and%20anger."
		return (
			<div>
				<MoodDisplay moods={moods}/>
				Source: <a href={url}>Very Well Mind</a> 
			</div>
		)
	}
}
