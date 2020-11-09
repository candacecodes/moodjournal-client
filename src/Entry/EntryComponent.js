import React, { Component } from "react";
import EntryAdd from "./EntryAdd";
import EntryCard from "./EntryCard";

export default class EntryComponent extends Component {
	buildEntries = () => {
		return this.props.entries.map((entry) => {
			return (
				<EntryCard
					entry={entry}
					// key={entry.id}
					// addEntry{this.props.addEntry}
					// deleteEntry={this.props.deleteEntry}
				/>
			);
		});
	};

	render() {
		return (
			<div>
				<EntryAdd />
				{this.buildEntries}
			</div>
		);
	}
}
