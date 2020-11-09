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
				/>
			);
		});
	};

	render() {
		return (
			<div className="ui four column grid">
				<div className="row">{this.buildEntries()}</div>
			</div>
		);
	}
}
