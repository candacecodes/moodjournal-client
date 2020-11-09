import React, { Component } from "react";
// import EntryAdd from "./EntryAdd";
import EntryCard from "./EntryCard";

export default class EntryComponent extends Component {
	buildEntries = () => {
		return this.props.entries.map((entry) => {
			return (
				<EntryCard
					entry={entry}
					key={entry.id}
					deleteEntryFromBackend={this.props.deleteEntryFromBackend}
				/>
			);
		});
	};

	render() {
		return (
			<div>
				{/* <EntryAdd addEntry={this.props.addEntry} /> */}
				<div className="row">{this.buildEntries()}</div>
			</div>
		);
	}
}
