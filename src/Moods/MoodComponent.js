import React, { Component } from "react";
import MoodDisplay from './MoodDisplay'
// import SearchMoods from "./SearchMoods";

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

		return (
			<div>
				{/* <SearchMoods /> */}
				<MoodDisplay moods={moods}/>
			</div>
		)
	}
}
