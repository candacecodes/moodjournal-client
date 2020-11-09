import React, { Component } from "react";
import EntryCard from "./EntryCard";
import EntryComponent from "./EntryComponent";

export default class EntriesDisplay extends Component {
	state = {
		entries: [],
	};

	componentDidMount() {
		fetch("http://localhost:3000/entries")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					entries: json,
				});
			});
	}

	render() {
		return (
			<div>
				<EntryComponent entries={this.state.entries} />
			</div>
		);
	}
}
