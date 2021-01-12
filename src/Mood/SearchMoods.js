import React, { Component } from "react";
import MoodDisplay from './MoodDisplay'

export default class SearchMoods extends Component {
	state = {
		searchTerm: '',
		searchedMoods: []
	}

	changeSearchTerm = e => {
		this.setState({ searchTerm: e.target.value})
	}

	getMood = () => {
		fetch(`https://mood-journal-api.herokuapp.com/moods`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({ searchTerm: this.state.searchTerm })
		})
		.then(res => res.json())
		.then ( searchedMoods => this.setState({ searchedMoods }))
	}

	render() {
		return (
			<div className="search-moods">
				<form>
					<label hmtlFor="search-input">Find The Mood You Desire</label>
						<br />
						<input 
							id="search-input"
							type="text"
							placeholder="Mood"
							value={this.state.searchTerm}
							onChange={this.changeSearchTerm}
						/>
						<br />
					<input type="submit" value="Search Mood" onClick={this.getMood}/>
				</form>
				{this.state.searchedMoods.length > 0 && <h2>Moods by Search:</h2>}
				<MoodDisplay moods={this.state.searchedMoods} />
			</div>
		);
	}
}
