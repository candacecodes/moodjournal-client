import React, { Component } from "react";
import EntryComponent from "./EntryComponent";
import EntryAdd from "./EntryAdd";
import { Button } from "reactstrap";

export default class EntriesDisplay extends Component {
	state = {
		entries: [],
		viewEntries: false,
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

	updateEntryState = (event) => {
		let entry = {
			user_id: 1,
			date: event.target.date.value,
			title: event.target.title.value,
			context: event.target.context.value,
			intensity_level: event.target.intensitylevel.value,
			mood_id: event.target.mood.value,
		};
		console.log(entry);
		if (!this.state.entries.includes(entry)) {
			this.setState({ entries: [...this.state.entries, entry] });
		}
	};

	addEntry = (event) => {
		event.preventDefault();
		// console.log(event.target.mood.value);
		// console.log(event.target.date.value);
		// console.log(event.target.title.value);

		let data = {
			user_id: 1,
			date: event.target.date.value,
			title: event.target.title.value,
			context: event.target.context.value,
			intensity_level: event.target.intensitylevel.value,
			mood_id: 1,
		};

		fetch("http://localhost:3000/entries", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((response) => response.json());

		this.updateEntryState(event);
	};

	deleteEntryFromBackend = (entry) => {
		console.log(entry);
		// const data = { entry };
		fetch(`http://localhost:3000/entries/${entry.id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		this.removeEntryFromState(entry);
	};

	removeEntryFromState = (entry) => {
		this.setState({
			entries: this.state.entries.filter((e) => e !== entry),
		});
	};

	// viewEntries = () => {
	// 	this.state.viewEntries ? null : (
	// <EntryComponent
	// 	entries={this.state.entries}
	// 	addEntry={this.addEntry}
	// 	deleteEntryFromBackend={this.deleteEntryFromBackend}
	// />
	// 	);
	// };

	render() {
		return (
			<div>
				<EntryAdd addEntry={this.props.addEntry} />
				{/* <Button onClick={this.viewEntries}> View Entries </Button> */}
				<EntryComponent
					entries={this.state.entries}
					addEntry={this.addEntry}
					deleteEntryFromBackend={this.deleteEntryFromBackend}
				/>
			</div>
		);
	}
}
