import React, { Component } from "react";
import MoodDisplay from './MoodDisplay'
import MoodSort from "./MoodSort";


export default class MoodComponent extends Component {
	
	componentDidMount() {
		fetch($`{API_ROOT}/moods`)
		.then(res => res.json())
		.then(moods => this.setState({moods}))
	}

	state = {
		moods: [],
		sortType: 'None'
		
	}

	selectSort = e => {
		console.log(e)
		this.setState({sortType: e})
	}

	
	
	
	render() {
		const { moods, sortType } = this.state
		// let url = "https://www.verywellmind.com/an-overview-of-the-types-of-emotions-4163976#:~:text=During%20the%201970s%2C%20psychologist%20Paul,fear%2C%20surprise%2C%20and%20anger."
		return (
			<div>
				<h1 className="title">Mood Browser</h1>
				<MoodSort selectSort={this.selectSort}/>
				<MoodDisplay sortType={sortType} moods={moods} />
				{/* <div className="link">Source: <a href={url}>Very Well Mind</a></div> */}
			</div>
		)
	}
}
