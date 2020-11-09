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

	addEntry = (entry) => {
		if (!this.state.entries.includes(entry)) {
			this.setState({ entries: [...this.state.entries, entry] });
		}
	};

	render() {
		return (
			<div>
				<EntryComponent entries={this.state.entries} addEntry={this.addEntry} />
			</div>
		);
	}
}
