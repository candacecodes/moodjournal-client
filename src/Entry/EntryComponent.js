import React, { Component } from "react";
import EntryCard from "./EntryCard";

export default class EntryComponent extends Component {
	buildEntries = () => {
		return this.props.entries.map((entry) => {
			return (
				<EntryCard
					entry={entry}
					key={entry.id}
					deleteEntryFromBackend={this.props.deleteEntryFromBackend}
					handleUpdate={this.props.handleUpdate}
				/>
			);
		});
	};

	render() {
		return (
			// <div className="ui four column grid">
			<div>
				<div>{this.buildEntries()}</div>
			</div>
		);
	}
}
