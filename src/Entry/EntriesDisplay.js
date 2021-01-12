import React, { Component } from "react";
import EntryComponent from "./EntryComponent";
import EntryAdd from "./EntryAdd";
// import { Button } from "reactstrap";

export default class EntriesDisplay extends Component {
	state = {
		entries: [],
		addEntry: false,
	};

	componentDidMount() {
		fetch($`{API_ROOT}/entries`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					entries: json,
				});
			});
	}

	// add functions
	addEntry = (data) => {
		console.log(data);

		// let data = {
		// 	user_id: 1,
		// 	date: event.target.date.value,
		// 	title: event.target.title.value,
		// 	context: event.target.context.value,
		// 	intensity_level: event.target.intensitylevel.value,
		// 	mood_id: 1,
		// };

		fetch($`{API_ROOT}/entries`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((response) => response.json());

		if (!this.state.entries.includes(data)) {
			this.setState({ entries: [...this.state.entries, data] });
		}
	};

	// update functions
	handleUpdate = (entry) => {
		fetch($`{API_ROOT}/entries/${entry.id}`, {
			method: 'PATCH',
			body: JSON.stringify(entry),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(entry => this.updateEntry(entry))
	}

	updateEntry = (entry) => {
		let newEntry = this.state.entries.filter((e) => e.id !== entry.id)
		newEntry.push(entry)
		this.setState({
			entries: newEntry
		})
	}

	// handleChange = e => {
	// 	const = 
	// }


	// delete functions
	deleteEntryFromBackend = (entry) => {
		console.log(entry);
		// const data = { entry };
		fetch($`{API_ROOT}/entries/${entry.id}`, {
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

	closeAddEntry = () => {
		this.setState({ addEntry: false });
	};

	openAddEntry = () => {
		this.setState({ addEntry: true });
	};

	// displayAddEntry = () => {

	render() {
		return (
			<>
				<h1 className="title">Mood Entries</h1>
				<div>
					{this.state.addEntry ? (
						<EntryAdd
							addEntry={this.addEntry}
							closeAddEntry={this.closeAddEntry}
						/>
					) : (
						<>
							<div>
								<button className="click-add-entry" onClick={this.openAddEntry}>Add Entry</button>
							</div>
							<EntryComponent
								entries={this.state.entries}
								openAddEntry={this.openAddEntry}
								deleteEntryFromBackend={this.deleteEntryFromBackend}
								handleUpdate={this.handleUpdate}
							/>{" "}
						</>
					)}
					{/* <EntryComponent
					entries={this.state.entries}
					addEntry={this.addEntry}
					deleteEntryFromBackend={this.deleteEntryFromBackend}
				/> */}
				</div>
			</>
		);
	}
}
